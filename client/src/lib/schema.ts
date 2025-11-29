import { z } from "zod";

// Contact form submission schema
export const insertContactSubmissionSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Please enter a valid email address"),
    company: z.string().optional(),
    message: z.string().min(1, "Message is required"),
});

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
