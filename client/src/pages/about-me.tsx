import Navigation from "@/components/Navigation";
import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";


export default function AboutMePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32">
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}
