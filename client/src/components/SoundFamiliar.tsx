/* "Sound familiar?": the four symptoms the buyer is living with, in their language. */
import { Brain, FileSpreadsheet, EyeOff, RotateCcw } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeading from "@/components/SectionHeading";

const SYMPTOMS = [
  {
    icon: Brain,
    title: "The job details live in someone's head.",
    body: "When they're out, the job stalls. When they leave, it leaves with them.",
  },
  {
    icon: FileSpreadsheet,
    title: "You bought software your crew doesn't touch.",
    body: "So the real work still happens in spreadsheets, texts and sticky notes.",
  },
  {
    icon: EyeOff,
    title: "You can't see your numbers until month-end.",
    body: "By the time you know a job went sideways, it's too late to fix it.",
  },
  {
    icon: RotateCcw,
    title: "The same mistakes keep coming back.",
    body: "Everyone agrees it needs fixing. Nothing changes, because nothing was built to change it.",
  },
];

export default function SoundFamiliar() {
  return (
    <section className="py-16 lg:py-24" data-testid="section-sound-familiar">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={<>Sound <span className="text-primary">familiar?</span></>}
          sub="You know where the business should be. The day-to-day hasn't caught up."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {SYMPTOMS.map(({ icon: Icon, title, body }) => (
            <Card key={title} className="border-border bg-card/60">
              <CardContent className="p-6 flex gap-4">
                <Icon className="w-7 h-7 text-primary flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{body}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
