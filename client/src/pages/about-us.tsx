import Navigation from "@/components/Navigation";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

const CALENDAR_LINK = "https://calendar.app.google/BJd5zjhMD5ZXctAx8";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation calendarLink={CALENDAR_LINK} />
      <main className="pt-20">
        <AboutUs />
      </main>
      <Footer calendarLink={CALENDAR_LINK} />
    </div>
  );
}
