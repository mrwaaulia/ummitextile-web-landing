import React from "react";
import Navbar from "../components/Navbar";
import ContactSecond from "../components/ContactDetail";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami - Ummi Textile",
  description: "Halaman hubungi kami untuk Ummi Textile.",
};

function page() {
  return (
    <div>
      <>
        <Navbar />
        <ContactSecond />
        <Footer />
      </>
    </div>
  );
}

export default page;
