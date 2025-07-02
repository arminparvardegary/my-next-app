import { Header } from "@/app/Header";
import { Hero } from "@/app/Hero";
import { LogoTicker } from "@/app/LogoTicker";
import { ProductShowcase } from "@/app/ProductShowcase";
import { Pricing } from "@/app/Pricing";
import { Testimonials } from "@/app/Testimonials";
import { CallToAction } from "@/app/CallToAction";
import { Footer } from "@/app/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
