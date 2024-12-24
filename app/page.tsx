import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Test from "./components/Test";

export default function Home() {
  return (
    <div>
      <>
        <Navbar />
        <Hero />
        <Product />
        <About />
        <Contact />
        <Footer />
      </>
    </div>
  );
}
