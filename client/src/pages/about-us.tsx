import Navigation from "@/components/Navigation";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";


export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32">
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}
