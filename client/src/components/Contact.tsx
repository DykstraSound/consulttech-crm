import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail, Send, CheckCircle } from "lucide-react";
import {
  insertContactSubmissionSchema,
  type InsertContactSubmission,
} from "@/lib/schema";
import { z } from "zod";

interface ContactProps {
  calendarLink: string;
}

const contactFormSchema = insertContactSubmissionSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(1, "Name is required"),
  message: z.string().min(1, "Message is required"),
});

const INDUSTRIES = [
  "Manufacturing",
  "Construction",
  "Distribution / Wholesale",
  "Professional Services",
  "Technology",
  "Other",
];

export default function Contact({ calendarLink: _calendarLink }: ContactProps) {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // UTM refs -hidden inputs populated from URL params
  const utmSourceRef = useRef<HTMLInputElement>(null);
  const utmMediumRef = useRef<HTMLInputElement>(null);
  const utmCampaignRef = useRef<HTMLInputElement>(null);
  const utmContentRef = useRef<HTMLInputElement>(null);

  const emailJSserviceId = "service_c5b6tck";
  const emailJStemplateId = "template_u13qoij";
  const emailJSPublicKey = "e5ixZ_2dTu3wqEuh5";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (utmSourceRef.current) utmSourceRef.current.value = params.get("utm_source") ?? "";
    if (utmMediumRef.current) utmMediumRef.current.value = params.get("utm_medium") ?? "";
    if (utmCampaignRef.current) utmCampaignRef.current.value = params.get("utm_campaign") ?? "";
    if (utmContentRef.current) utmContentRef.current.value = params.get("utm_content") ?? "";
  }, []);

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      industry: "",
      challenge: "",
      message: "",
    },
  });

  const onSubmit = async (_data: InsertContactSubmission) => {
    if (!formRef.current) return;
    setIsLoading(true);
    try {
      await emailjs.sendForm(
        emailJSserviceId,
        emailJStemplateId,
        formRef.current,
        emailJSPublicKey
      );
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. We'll be in touch soon.",
      });
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    form.reset();
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      className="py-16 lg:py-24 bg-gradient-to-br from-background via-[hsl(190,100%,45%)]/5 to-primary/5"
      data-testid="section-contact"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Free Salesforce <span className="text-primary">Health Check</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tell us a bit about your business and your biggest Salesforce challenge. We'll
            review your situation and come back with a clear, honest assessment - no sales pitch.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                Request Your Health Check
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    Your request has been received. We'll be in touch shortly to schedule your Health Check.
                  </p>
                  <Button variant="outline" onClick={handleReset} data-testid="button-send-another">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    {/* Hidden UTM fields -populated from URL params on mount */}
                    <input type="hidden" name="utm_source" ref={utmSourceRef} />
                    <input type="hidden" name="utm_medium" ref={utmMediumRef} />
                    <input type="hidden" name="utm_campaign" ref={utmCampaignRef} />
                    <input type="hidden" name="utm_content" ref={utmContentRef} />

                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" data-testid="input-name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" data-testid="input-email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your company name"
                              data-testid="input-company"
                              {...field}
                              value={field.value ?? ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="industry"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Industry</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value ?? ""}>
                            <FormControl>
                              <SelectTrigger data-testid="select-industry">
                                <SelectValue placeholder="Select your industry" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {INDUSTRIES.map((ind) => (
                                <SelectItem key={ind} value={ind}>
                                  {ind}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          {/* Pass selected value as a named input for EmailJS */}
                          <input type="hidden" name="industry" value={field.value ?? ""} />
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="challenge"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What's your biggest Salesforce challenge?</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="e.g. Our data is a mess, nobody uses the CRM, we're not sure what we're paying for..."
                              rows={3}
                              className="resize-none"
                              data-testid="input-challenge"
                              {...field}
                              value={field.value ?? ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Anything else we should know? *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us more about your business or what you're hoping to accomplish..."
                              rows={4}
                              className="resize-none"
                              data-testid="input-message"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isLoading}
                      data-testid="button-submit"
                    >
                      {isLoading ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Request Health Check
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-transparent">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  What You'll Get
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>An honest review of your current Salesforce setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Clear identification of gaps, risks, and quick wins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>A prioritized action plan - no fluff, no hard sell</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>100% free, no commitment required</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[hsl(190,100%,45%)]/30 bg-gradient-to-br from-[hsl(190,100%,45%)]/10 to-transparent">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Prefer to Talk First?
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  Schedule a 20-minute intro call. We'll learn about your situation and see if
                  we're the right fit - no pressure.
                </p>
                <Button asChild variant="outline" className="w-full" data-testid="button-schedule-contact">
                  <a href="https://calendar.app.google/BJd5zjhMD5ZXctAx8" target="_blank" rel="noopener noreferrer">
                    Book a Call
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Why <span className="text-primary">ConsultTech CRM</span>?
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Certified across Salesforce, StoreConnect & AWS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Industry experience in manufacturing, construction & distribution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Fractional model - expert support without the full-time overhead</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Long-term partnership approach, not one-and-done projects</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
