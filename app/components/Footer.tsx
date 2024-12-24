import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-primary dark:bg-secondary">
        <div className="mx-auto w-full max-w-screen-xl  px-4 py-14">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <img
                  src="/assets/ummi-logo.PNG"
                  className="md:h-28 sm:h-24 h-20 me-3"
                  alt="Ummi Textile Logo"
                />
              </a>
            </div>
            <div className="grid grid-cols-2 md:gap-20 sm:gap-6 gap-8 sm:grid-cols-3 px-2">
              <div>
                <h2 className="mb-6 md:text-sm sm:text-sm text-xs font-semibold text-secondary uppercase dark:text-white">
                  Tautan
                </h2>
                <ul className="text-white/80 dark:text-gray-400 font-medium md:text-sm sm:text-sm text-xs">
                  <li className="mb-4">
                    <a href="/" className="hover:underline">
                      Beranda
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/product" className="hover:underline">
                      Produk
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/about" className="hover:underline">
                      Tentang Kami
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/contact" className="hover:underline">
                      Kontak
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 md:text-sm sm:text-sm text-xs font-semibold text-secondary uppercase dark:text-white">
                  Koleksi Kami
                </h2>
                <ul className="text-white/80 dark:text-gray-400 font-medium md:text-sm sm:text-sm text-xs">
                  <li className="mb-4">
                    <a href="/product#dryfit" className="hover:underline ">
                      Dryfit
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/product#knit" className="hover:underline">
                      Knit
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/product#scuba" className="hover:underline">
                      Scuba
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="/product#spandex" className="hover:underline">
                      Spandex
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 md:text-sm sm:text-sm text-xs font-semibold text-secondary uppercase dark:text-white">
                  Pembayaran
                </h2>
                <ul className="text-white/80 dark:text-gray-400 font-medium md:text-sm sm:text-sm text-xs">
                  <li className="mb-4">
                    <img
                      src="/assets/bca-logo.svg"
                      alt="BCA Logo"
                      className="h-10"
                    />
                  </li>
                  <li className="mb-4 rounded-md">
                    <img
                      src="/assets/maybank-logo.png"
                      alt="MayBank Logo"
                      className="h-9 rounded-md"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="flex items-center justify-center">
            <span className="md:text-sm sm:text-sm text-xs text-white/80 dark:text-gray-400">
              © 2024{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Ummi Textile™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
