/*
  Intake form ("send me the details first") plus the talk-first card and what-you-get panel.
  The form is a plain HTML POST to Zoho CRM Web-to-Lead (see ZOHO_WEBFORM in lib/site.ts). react-hook-form
  validates first, then the native form submits. Zoho creates the Lead, emails Travis, and redirects back to
  /contact?submitted=1, which shows the thank-you state. Input `name`s are Zoho's, not the RHF field names.
*/
import { useRef } from "react";
import { useForm, type Control } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Mail, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import TalkFirstCard from "@/components/TalkFirstCard";
import { ZOHO_WEBFORM } from "@/lib/site";
import { intakeSchema, type IntakeValues } from "@/lib/schema";

const WHAT_YOU_GET = [
  "Your top 3 issues, in writing",
  "Where you are vs. where you want to be",
  "The right tools for your budget: Zoho or Salesforce",
  "What to expect, within 48 hours. Free.",
];

const WHY = [
  "Army Combat Veteran owned",
  "Years in construction estimating and operations, not just software",
  "Zoho or Salesforce, fit to your budget",
  "Took installation errors from daily to a couple a month",
];

type TextName = "firstName" | "lastName" | "email" | "company";
type SelectName = "companySize" | "industry" | "currentTools";

function TextField(props: {
  control: Control<IntakeValues>;
  name: TextName;
  zohoName: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{props.label}</FormLabel>
          <FormControl>
            <Input type={props.type ?? "text"} placeholder={props.placeholder} {...field} value={field.value ?? ""} name={props.zohoName} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function SelectField(props: {
  control: Control<IntakeValues>;
  name: SelectName;
  zohoName: string;
  label: string;
  placeholder: string;
  options: readonly string[];
}) {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{props.label}</FormLabel>
          <Select onValueChange={field.onChange} value={field.value ?? ""}>
            <FormControl>
              <SelectTrigger data-testid={`select-${props.name}`}>
                <SelectValue placeholder={props.placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {props.options.map((o) => (
                <SelectItem key={o} value={o}>
                  {o}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <input type="hidden" name={props.zohoName} value={field.value ?? ""} />
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-sm text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const submitted = new URLSearchParams(window.location.search).get("submitted") === "1";

  const form = useForm<IntakeValues>({
    resolver: zodResolver(intakeSchema),
    defaultValues: {
      firstName: "", lastName: "", email: "", company: "",
      companySize: "", industry: "", currentTools: "", headache: "", description: "",
    },
  });

  // Validation passed: hand off to the browser's native POST to Zoho (form.submit() skips this handler).
  const onValid = () => formRef.current?.submit();

  return (
    <section id="contact" className="py-16 lg:py-24" data-testid="section-contact">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
        <Card className="border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
              Send me the details first
            </CardTitle>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-white mb-2">Thank you!</h3>
                <p className="text-muted-foreground">Got it. I'll be in touch soon to set up your Punch List call.</p>
              </div>
            ) : (
              <Form {...form}>
                <form
                  ref={formRef}
                  action={ZOHO_WEBFORM.action}
                  method="POST"
                  acceptCharset="UTF-8"
                  onSubmit={form.handleSubmit(onValid)}
                  className="space-y-4"
                >
                  {Object.entries(ZOHO_WEBFORM.hidden).map(([name, value]) => (
                    <input key={name} type="hidden" name={name} value={value} readOnly />
                  ))}
                  <input type="text" name={ZOHO_WEBFORM.honeypot} defaultValue="" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <TextField control={form.control} name="firstName" zohoName="First Name" label="First name *" placeholder="First name" />
                    <TextField control={form.control} name="lastName" zohoName="Last Name" label="Last name *" placeholder="Last name" />
                  </div>
                  <TextField control={form.control} name="email" zohoName="Email" label="Email *" type="email" placeholder="you@company.com" />
                  <TextField control={form.control} name="company" zohoName="Company" label="Company" placeholder="Company name" />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <SelectField control={form.control} name="companySize" zohoName="LEADCF7" label="Company size" placeholder="How many people?" options={ZOHO_WEBFORM.options.companySize} />
                    <SelectField control={form.control} name="industry" zohoName="LEADCF8" label="Industry" placeholder="Pick one" options={ZOHO_WEBFORM.options.industry} />
                  </div>
                  <SelectField control={form.control} name="currentTools" zohoName="LEADCF9" label="What are you running on today?" placeholder="Pick the closest" options={ZOHO_WEBFORM.options.currentTools} />

                  <FormField control={form.control} name="headache" render={({ field }) => (
                    <FormItem>
                      <FormLabel>What's your #1 headache? *</FormLabel>
                      <FormControl>
                        <Textarea rows={3} className="resize-none" placeholder="e.g. Bids live in three different spreadsheets and nobody trusts the numbers." {...field} name="LEADCF10" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <FormField control={form.control} name="description" render={({ field }) => (
                    <FormItem>
                      <FormLabel>Anything else I should know?</FormLabel>
                      <FormControl>
                        <Textarea rows={3} className="resize-none" placeholder="Where you want the business to be, deadlines, budget, anything." {...field} value={field.value ?? ""} name="Description" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />

                  <Button type="submit" className="w-full" disabled={form.formState.isSubmitting} data-testid="button-submit">
                    <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                    Send It
                  </Button>
                </form>
              </Form>
            )}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <TalkFirstCard />
          <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-transparent">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-white mb-3">What's on your punch list</h3>
              <CheckList items={WHAT_YOU_GET} />
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Why <span className="text-primary">ConsultTech CRM</span>?</h3>
              <CheckList items={WHY} />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
