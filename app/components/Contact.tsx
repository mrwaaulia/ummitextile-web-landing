import React from "react";
import { MapPinLine, Phone, Clock } from "@phosphor-icons/react/dist/ssr";

function Contact() {
  return (
    <div>
      <section id="contact" className="bg-gray-100 w-full">
        <div className="md:flex md:gap-20 md:p-20 py-16 px-8">
          <div className="md:hidden block md:mb-0 sm:mb-24 mb-14">
            <img
              src="/imgs/contact-us.svg"
              alt="Contact Us"
              className="relative"
            />
          </div>
          <div className="text-gray-700 ">
            <h1 className="md:text-6xl sm:text-4xl text-2xl font-bold text-primary mb-6">
              Kontak Kami
            </h1>
            <p className="md:text-base sm:text-base text-sm  mb-10">
              Kami ingin mendengar pendapat Anda! Hubungi kami untuk pertanyaan
              atau bantuan apa pun.
            </p>
            <div className="bg-primary rounded-lg text-white p-8">
              <div className="flex md:gap-8 sm:gap-6 gap-4 mb-6">
                <MapPinLine
                  size={40}
                  className="text-primary bg-white rounded-full p-2"
                />
                <p className="md:pt-2 pt-3 md:text-base sm:text-sm text-xs">
                  Jl. Batu Rengat No. 37, Bandung
                </p>
              </div>
              <div className="flex md:gap-8 sm:gap-6 gap-4 mb-6">
                <Phone
                  size={40}
                  className="text-primary bg-white rounded-full p-2"
                />
                <div className="md:pt-2 pt-3 md:text-base sm:text-sm text-xs">
                  <p>0812-1999-0599</p>
                  <p>0811-2442-271</p>
                  <p>0822-9900-9065</p>
                </div>
              </div>
              <div className="flex md:gap-8 sm:gap-6 gap-4 mb-6">
                <Clock
                  size={40}
                  className="text-primary bg-white rounded-full p-2"
                />
                <div className="md:pt-2 pt-3 md:text-base sm:text-sm text-xs">
                  <p>Senin - Jumat: 08.00 - 16.30 WIB</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-24 md:block hidden">
            <img
              src="/imgs/contact-us.svg"
              alt="Contact Us"
              className="relative"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
