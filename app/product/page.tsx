import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductDetail from "../components/ProductDetail";

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
