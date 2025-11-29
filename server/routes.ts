import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactSubmissionSchema.safeParse(req.body);
      
      if (!parsed.success) {
        const validationError = fromError(parsed.error);
        return res.status(400).json({ 
          error: "Validation failed", 
          details: validationError.toString() 
        });
      }

      const submission = await storage.createContactSubmission(parsed.data);
      
      return res.status(201).json({ 
        message: "Contact submission received successfully",
        id: submission.id
      });
    } catch (error) {
      console.error("Error creating contact submission:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (_req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      return res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  return httpServer;
}
