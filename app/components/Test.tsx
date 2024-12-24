import React from "react";

function Test() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* {Array(3)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="w-full md:w-72 sm:w-96 h-full rounded-md bg-white shadow-md relative group overflow-hidden"
          >
            <div className="relative w-full h-full">
              <img
                src="/imgs/waffle_knit_black_1.jpg"
                alt={`Waffle Knit Black ${index + 1}`}
                className="rounded-t-md w-full h-56 md:h-64 sm:h-64 mb-4 shadow-md transition-transform duration-700 group-hover:scale-110 group-hover:opacity-0"
              />
              <img
                src="/imgs/waffle_knit_black_2.jpg"
                alt={`Waffle Knit Black Hover ${index + 1}`}
                className="rounded-t-md w-full h-56 md:h-64 sm:h-64 mb-4 shadow-md absolute top-0 left-0 transition-transform duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
              />
            </div>
            
            <div className="text-center p-4 relative z-20">
              <h3 className="text-primary font-medium md:text-lg sm:text-lg text-base">
                Waffle Knit Black {index + 1}
              </h3>
              <p className="text-gray-700 md:text-sm sm:text-sm text-xs font-normal">
                Soft, durable, and available in a variety of colors.
              </p>
            </div>
          </div>
        ))}
      { */}
      {/* <div className="relative overflow-clip w-full md:h-[40rem] h-[42rem] bg-primary/50 backdrop-blur-sm z-20 md:-translate-y-[40rem]  sm:-translate-y-[39.5rem] -translate-y-[41.5rem]">
        <div className="h-full flex flex-col justify-center items-start md:px-20 px-8">
          <div className="text-left md:mt-[6rem] mt-8  mb-8">
            <h1 className="text-white font-bold md:text-6xl sm:text-4xl  text-3xl md:truncate md:py-2">
              Selamat Datang di Ummi Textile,
            </h1>
            <h1 className="text-white font-bold md:text-5xl sm:text-3xl text-xl md:my-4 my-2">
              Rumah Kain Berkualitas Tinggi
            </h1>
          </div>
          <p className="text-white w-[62rem] font-normal text-lg">
            Temukan keanggunan dalam setiap helai kain kami. Ummi Textile
            menghadirkan pilihan terbaik untuk kenyamanan dan gaya Anda. 
          </p> 
          <a
            href="/"
            className="border-2 rounded-lg p-4 bg-primary border-none text-white md:text-sm text-xs font-medium hover:bg-secondary ease-linear duration-300"
          >
            Jelajahi Koleksi Kami
          </a>
        </div>
      </div> */}

      <div className="md:w-72 sm:w-96 w-64 h-full rounded-md bg-white shadow-md relative group overflow-hidden">
        <img
          src="/imgs/waffle_knit_black_1.jpg"
          alt="Waffle Knit Black"
          className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md transition-transform duration-700 group-hover:scale-110 group-hover:opacity-0"
        />
        <img
          src="/imgs/waffle_knit_black_2.jpg"
          alt="Waffle Knit Black"
          className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md absolute top-0 left-0 transition-transform duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
        />
        <div className="text-center p-4">
          <h3 className="text-primary font-medium md:text-lg sm:text-lg text-base mb-2">
            Waffle Knit Black
          </h3>
          <p className="text-gray-700 font-semibold md:text-lg sm:text-lg text-base mb-2">
            150.000/kg
          </p>

          <p className="text-gray-700 md:text-sm sm:text-sm text-xs font-normal">
            Soft, durable, and available in a variety of colors.
          </p>
        </div>
      </div>

      {/* {isDropdownOpen && (
                <ul className="absolute w-28 z-10 bg-white border border-gray-200 rounded-lg shadow-md left-0">
                  <li>
                    <Link
                      href="/product/1"
                      className="relative block px-4 py-2 text-primary/70 hover:text-primary duration-300 ease-linear after:absolute after:-bottom-[2px] hover:after:w-full after:inset-x-0 after:w-0 after:h-[1.5px] after:bg-secondary after:duration-300 after:ease-linear"
                      onClick={closeBurgerMenu}
                    >
                      Dryfit
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/product/2"
                      className="relative block px-4 py-2 text-primary/70 hover:text-primary duration-300 ease-linear after:absolute after:-bottom-[2px] hover:after:w-full after:inset-x-0 after:w-0 after:h-[1.5px] after:bg-secondary after:duration-300 after:ease-linear"
                      onClick={closeBurgerMenu}
                    >
                      Knit
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/product/3"
                      className="relative block px-4 py-2 text-primary/70 hover:text-primary duration-300 ease-linear after:absolute after:-bottom-[2px] hover:after:w-full after:inset-x-0 after:w-0 after:h-[1.5px] after:bg-secondary after:duration-300 after:ease-linear"
                      onClick={closeBurgerMenu}
                    >
                      Spandex
                    </Link>
                  </li>
                </ul>
              )} */}
    </div>
  );
}

export default Test;
