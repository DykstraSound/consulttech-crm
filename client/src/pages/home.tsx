import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const CALENDAR_LINK = "https://calendar.app.google/BJd5zjhMD5ZXctAx8";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation calendarLink={CALENDAR_LINK} />
      <main>
        <Hero calendarLink={CALENDAR_LINK} />
        <AboutUs />
        <AboutMe />
        <Services />
        <Contact calendarLink={CALENDAR_LINK} />
      </main>
      <Footer calendarLink={CALENDAR_LINK} />
    </div>
  );
}
