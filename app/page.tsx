import CTASection from "./components/home/CTA";
import HeroSection from "./components/home/Hero";
import Process from "./components/home/Process";
import Testimonials from "./components/home/Testimonials";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Update from "./components/layout/Update";

export default function Home() {

  return (
    <>
    <Update/>
    <Header/>
    <HeroSection/>
    <Process/>
    <Testimonials/>
    <CTASection/>
    <Footer/>
    </>
  );
}
