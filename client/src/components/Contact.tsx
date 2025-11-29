import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Calendar, Mail, Send, CheckCircle } from "lucide-react";
import type { InsertContactSubmission } from "@shared/schema";

interface ContactProps {
  calendarLink: string;
}

export default function Contact({ calendarLink }: ContactProps) {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<InsertContactSubmission>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });
      setIsSubmitted(true);
    },
    onError: (error: Error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", company: "", message: "" });
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
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your CRM strategy? Let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Your message has been sent successfully. We'll get back to you soon.
                  </p>
                  <Button variant="outline" onClick={handleReset} data-testid="button-send-another">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      data-testid="input-name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      data-testid="input-email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company || ""}
                      onChange={handleChange}
                      placeholder="Your company name"
                      data-testid="input-company"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      rows={4}
                      required
                      className="resize-none"
                      data-testid="input-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={submitMutation.isPending}
                    data-testid="button-submit"
                  >
                    {submitMutation.isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="border-primary/30 bg-gradient-to-br from-primary/10 to-transparent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-primary-foreground" />
                  </div>
                  Schedule a Call
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Prefer to talk directly? Schedule a consultation call at your 
                  convenience. We'll discuss your needs and how we can help.
                </p>
                <Button asChild className="w-full" data-testid="button-schedule-contact">
                  <a href={calendarLink} target="_blank" rel="noopener noreferrer">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book a Consultation
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-[hsl(190,100%,45%)]/30 bg-gradient-to-br from-[hsl(190,100%,45%)]/10 to-transparent">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Why Choose <span className="text-primary">ConsultTech CRM</span>?
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Certified experts in Salesforce, StoreConnect & AWS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Tailored solutions for your specific business needs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Ongoing support and partnership approach</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Proven track record of successful implementations</span>
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
