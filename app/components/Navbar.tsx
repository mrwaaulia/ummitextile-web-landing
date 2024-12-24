"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const closeBurgerMenu = () => {
    setIsBurgerMenuOpen(false);
  };

  const getLinkClass = (path: string): string => {
    const isActive = pathname === path;
    return `relative block py-2 px-3 rounded ${
      isBurgerMenuOpen
        ? "text-primary/70 hover:text-primary"
        : isActive
        ? "text-white after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-[1.5px] after:bg-secondary after:duration-300 after:ease-linear"
        : "text-white/80 hover:text-white"
    } duration-300 ease-linear after:absolute after:-bottom-[2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-secondary after:duration-300 after:ease-linear hover:after:w-full`;
  };

  return (
    <nav className="bg-primary border-gray-200 shadow-md fixed top-0 w-full z-50 dark:bg-gray-900 dark:border-gray-700 md:px-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/assets/ummi-logo.PNG"
            className="md:pt-1 sm:pt-0 pt-1 md:h-20 h-[4rem]"
            alt="Ummi Textile Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className={`inline-flex items-center p-2 justify-center text-sm ${
            isBurgerMenuOpen ? "text-white" : "text-white"
          } rounded-lg md:hidden`}
          aria-controls="navbar-dropdown"
          aria-expanded={isBurgerMenuOpen}
          onClick={toggleBurgerMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isBurgerMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-primary dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {/* Home */}
            <li>
              <Link
                href="/"
                className={getLinkClass("/")}
                onClick={closeBurgerMenu}
              >
                Beranda
              </Link>
            </li>

            {/* Product Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link
                href="/product"
                className={getLinkClass("/product")}
                onClick={closeBurgerMenu}
              >
                Produk
              </Link>
            </li>

            {/* About */}
            <li>
              <Link
                href="/about"
                className={getLinkClass("/about")}
                onClick={closeBurgerMenu}
              >
                Tentang Kami
              </Link>
            </li>

            {/* Contact */}
            <li>
              <Link
                href="/contact"
                className={getLinkClass("/contact")}
                onClick={closeBurgerMenu}
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
