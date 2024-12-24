import React from "react";
import Navbar from "../components/Navbar";
import AboutDetail from "../components/AboutDetail";
import Footer from "../components/Footer";

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
