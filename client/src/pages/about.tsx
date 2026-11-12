import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About ConsultTech CRM | Certified Fractional Salesforce Consultant"
        description="Meet the certified Salesforce consultant behind ConsultTech CRM. Salesforce Platform Administrator, Business Analyst, Agentforce Specialist, and Data Cloud Consultant serving manufacturing, construction, and distribution companies."
        path="/about"
      />
      <Navigation />
      <main className="pt-32">
        <About />
      </main>
      <Footer />
    </div>
  );
}
