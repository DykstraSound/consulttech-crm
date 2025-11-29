import Navigation from "@/components/Navigation";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";

const CALENDAR_LINK = "https://calendar.app.google/BJd5zjhMD5ZXctAx8";

export default function AboutMePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation calendarLink={CALENDAR_LINK} />
      <main className="pt-20">
        <AboutMe />
      </main>
      <Footer calendarLink={CALENDAR_LINK} />
    </div>
  );
}
