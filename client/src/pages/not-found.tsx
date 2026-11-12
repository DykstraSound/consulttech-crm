/* 404 page: shown for any unknown route; points visitors home or to the free Punch List call. */
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import PunchListButton from "@/components/PunchListButton";

export default function NotFound() {
  return (
    <PageLayout
      seo={{
        title: "Page not found | ConsultTech CRM",
        description: "That page doesn't exist. Head back to the ConsultTech CRM home page or book a free Punch List call.",
        path: "/404",
      }}
    >
      <section className="py-24 lg:py-32">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Page not found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            That page doesn't exist or has moved. The best next step is a free 30-minute call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <PunchListButton size="lg" />
            <Link href="/" className="text-primary font-medium hover:underline">
              Back to the home page
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
