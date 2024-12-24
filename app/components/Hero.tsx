"use client";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const images = [
    { src: "/imgs/hero_one.PNG", alt: "produk 1" },
    { src: "/imgs/hero_two.PNG", alt: "produk 2" },
    { src: "/imgs/hero_three.jpg", alt: "produk 3" },
  ];

  // Preload semua gambar
  useEffect(() => {
    const preloadImages = async () => {
      const promises = images.map(
        (image) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = image.src;
            img.onload = resolve;
            img.onerror = resolve;
          })
      );

      await Promise.all(promises);
      setImagesLoaded(true);
    };

    preloadImages();
  }, []);

  // Auto-slide
  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, imagesLoaded]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {!imagesLoaded ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-lg text-gray-500">Loading...</p>
        </div>
      ) : (
        <div className="relative h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Slide Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />

              {/* Overlay Filter */}
              <div className="absolute inset-0 bg-primary opacity-50"></div>

              {/* Slide Content */}
              <div className="absolute md:top-[60%] sm:top-[60%] top-[55%] md:left-[35%] sm:left-72 left-44 transform -translate-x-1/2 -translate-y-1/2 text-left text-white">
                <h1 className="md:text-6xl sm:text-4xl text-2xl md:mb-6 sm:mb-3 mb-2 font-bold truncate">
                  Welcome to Ummi Textile
                </h1>
                <h2 className="md:text-4xl sm:text-2xl text-lg md:mb-14 sm:mb-14 mb-12 font-bold">
                  Rumah Kain Berkualitas Tinggi
                </h2>
                <button className="bg-secondary md:text-lg sm:text-sm text-xs py-2 px-4 rounded-md hover:bg-yellow-500">
                  Lihat semua koleksi
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Hero;
