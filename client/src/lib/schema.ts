/* Intake form validation. react-hook-form validates client-side; the native form then posts to Zoho under Zoho's field names. */
import { z } from "zod";

export const intakeSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  companySize: z.string().optional(),
  industry: z.string().optional(),
  currentTools: z.string().optional(),
  headache: z.string().min(1, "Tell me your #1 headache"),
  description: z.string().optional(),
});

export type IntakeValues = z.infer<typeof intakeSchema>;
