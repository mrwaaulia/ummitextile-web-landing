import React from "react";
import Navbar from "../components/Navbar";
import AboutDetail from "../components/AboutDetail";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami - Ummi Textile",
  description: "Kenali lebih lanjut tentang Ummi Textile",
};

function page() {
  return (
    <div>
      <>
        <Navbar />
        <AboutDetail />
        <Footer />
      </>
    </div>
  );
}

export default page;
