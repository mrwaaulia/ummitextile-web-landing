import React from "react";

function Product() {
  return (
    <div>
      <section
        id="product"
        className="bg-gray-100 w-full h-fit md:p-20 py-16 px-8 flex flex-col justify-center items-center"
      >
        <div>
          <div className="text-center mb-14">
            <h1 className="text-primary font-bold md:text-6xl sm:text-2xl text-xl mb-4">
              Produk Kami
            </h1>
            <p className="text-gray-700 font-normal md:text-lg sm:text-base text-sm">
              Kami menyediakan berbagai macam produk tekstil berkualitas tinggi
              yang disesuaikan dengan kebutuhan Anda.
            </p>
          </div>
          <div className="w-full grid md:grid-cols-4 grid-cols-1 place-items-center md:gap-16 gap-12 mb-14">
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
                  60.000/kg
                </p>
                <p className="text-gray-700 md:text-sm sm:text-sm text-xs font-normal">
                  Bahan quality Import, ringan, dan elastis.
                </p>
              </div>
            </div>
            <div className="md:w-72 sm:w-96 w-64 h-full rounded-md bg-white shadow-md relative group overflow-hidden">
              <img
                src="/imgs/dryfit_brazil_embos_1.jpg"
                alt="Dryfit Brazil Embos"
                className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md transition-transform duration-700 group-hover:scale-110 group-hover:opacity-0"
              />
              <img
                src="/imgs/dryfit_brazil_embos_2.jpg"
                alt="Dryfit Brazil Embos"
                className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md absolute top-0 left-0 transition-transform duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
              />
              <div className="text-center p-4">
                <h3 className="text-primary font-medium md:text-lg sm:text-lg text-base mb-2">
                  Dryfit Brazil Embos
                </h3>
                <p className="text-gray-700 font-semibold md:text-lg sm:text-lg text-base mb-2">
                  60.000/kg
                </p>
                <p className="text-gray-700 md:text-sm sm:text-sm text-xs font-normal">
                  Bahan ringan dan bahan tekstur emboss.
                </p>
              </div>
            </div>
            <div className="md:w-72 sm:w-96 w-64 h-full rounded-md bg-white shadow-md relative group overflow-hidden">
              <img
                src="/imgs/scuba_maximus_1.jpg"
                alt="Scuba Maximus"
                className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md transition-transform duration-700 group-hover:scale-110 group-hover:opacity-0"
              />
              <img
                src="/imgs/scuba_maximus_2.jpg"
                alt="Scuba Maximus"
                className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md absolute top-0 left-0 transition-transform duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
              />
              <div className="text-center p-4">
                <h3 className="text-primary font-medium md:text-lg sm:text-lg text-base mb-2">
                  Scuba Maximus
                </h3>
                <p className="text-gray-700 font-semibold md:text-lg sm:text-lg text-base mb-2">
                  65.000/kg
                </p>
                <p className="text-gray-700 md:text-sm sm:text-sm text-xs font-normal">
                  Bahan elastis dan bahan tahan <br />
                  lama.
                </p>
              </div>
            </div>
            <div className="md:w-72 sm:w-96 w-64 h-full rounded-md bg-white shadow-md relative group overflow-hidden">
              <img
                src="/imgs/spandex_linen_1.jpg"
                alt="Spandex Linen"
                className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md transition-transform duration-700 group-hover:scale-110 group-hover:opacity-0"
              />
              <img
                src="/imgs/spandex_linen_2.jpg"
                alt="Spandex Linen"
                className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md absolute top-0 left-0 transition-transform duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
              />
              <div className="text-center p-4">
                <h3 className="text-primary font-medium md:text-lg sm:text-lg text-base mb-2">
                  Spandex Linen
                </h3>
                <p className="text-gray-700 font-semibold md:text-lg sm:text-lg text-base mb-2">
                  60.000/kg
                </p>
                <p className="text-gray-700 md:text-sm sm:text-sm text-xs font-normal">
                  Bahan ringan, nyaman, dan tampilan casual.
                </p>
              </div>
            </div>
          </div>
          <a
            href="/product"
            className="flex justify-center md:ml-0 ml-0 text-primary text-md font-medium hover:text-primary/80 hover:underline ease-linear duration-300"
          >
            Lihat semua produk
          </a>
        </div>
      </section>
    </div>
  );
}

export default Product;
