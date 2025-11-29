// GitHub Integration - Push to new repository
import { Octokit } from '@octokit/rest';
import { execSync } from 'child_process';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=github',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('GitHub not connected');
  }
  return accessToken;
}

async function getUncachableGitHubClient() {
  const accessToken = await getAccessToken();
  return new Octokit({ auth: accessToken });
}

async function main() {
  const repoName = 'consulttech-crm';
  
  console.log('🔐 Connecting to GitHub...');
  const octokit = await getUncachableGitHubClient();
  
  // Get authenticated user
  const { data: user } = await octokit.users.getAuthenticated();
  console.log(`✅ Authenticated as: ${user.login}`);
  
  // Check if repo already exists
  let repoExists = false;
  try {
    await octokit.repos.get({
      owner: user.login,
      repo: repoName
    });
    repoExists = true;
    console.log(`📁 Repository ${repoName} already exists`);
  } catch (error: any) {
    if (error.status !== 404) {
      throw error;
    }
  }
  
  // Create new repository if it doesn't exist
  if (!repoExists) {
    console.log(`📦 Creating new repository: ${repoName}...`);
    await octokit.repos.createForAuthenticatedUser({
      name: repoName,
      description: 'ConsultTech CRM - Professional Consultancy Website showcasing Salesforce, StoreConnect, and AWS expertise',
      private: false,
      auto_init: false
    });
    console.log(`✅ Repository created: https://github.com/${user.login}/${repoName}`);
  }
  
  // Get access token for git commands
  const token = await getAccessToken();
  const remoteUrl = `https://${token}@github.com/${user.login}/${repoName}.git`;
  
  // Configure git and push
  console.log('📤 Pushing code to GitHub...');
  
  try {
    // Remove existing remote if it exists
    try {
      execSync('git remote remove origin', { stdio: 'pipe' });
    } catch (e) {
      // Remote might not exist, that's fine
    }
    
    // Add new remote
    execSync(`git remote add origin ${remoteUrl}`, { stdio: 'pipe' });
    
    // Configure git user
    execSync('git config user.email "replit@users.noreply.github.com"', { stdio: 'pipe' });
    execSync('git config user.name "Replit"', { stdio: 'pipe' });
    
    // Stage all files
    execSync('git add -A', { stdio: 'pipe' });
    
    // Commit
    try {
      execSync('git commit -m "Initial commit: ConsultTech CRM website"', { stdio: 'pipe' });
    } catch (e) {
      // If nothing to commit, that's fine
      console.log('📝 No new changes to commit');
    }
    
    // Push to main branch
    execSync('git push -u origin main --force', { stdio: 'inherit' });
    
    console.log(`\n✅ Success! Your code is now on GitHub:`);
    console.log(`🔗 https://github.com/${user.login}/${repoName}`);
    
  } catch (error: any) {
    console.error('Error pushing to GitHub:', error.message);
    throw error;
  }
}

main().catch(console.error);
