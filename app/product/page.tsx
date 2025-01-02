import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Produk - Ummi Textile",
  description: "Lihat produk berkualitas dari Ummi Textile.",
};

function page() {
  return (
    <div>
      <>
        <Navbar />
        <ProductDetail />
        <Footer />
      </>
    </div>
  );
}

export default page;
