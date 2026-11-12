/* "Prefer to talk first?" card: books the 30-minute call directly on Zoho Calendar. */
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BOOKING_URL } from "@/lib/site";

export default function TalkFirstCard() {
  return (
    <Card className="border-[hsl(var(--brand-blue))]/40 bg-gradient-to-br from-[hsl(var(--brand-blue))]/10 to-transparent">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-white mb-3">Prefer to talk first?</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          Book a 30-minute call. We'll see if we're the right fit, no pressure.
        </p>
        <Button asChild variant="outline" className="w-full" data-testid="button-book-call">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
            Book a Call
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
