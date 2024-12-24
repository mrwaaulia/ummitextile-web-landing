"use client";
import React, { useState } from "react";

function ProductDetail() {
  const tabsData = [
    {
      id: "dryfit",
      label: "Dryfit",
      content: (
        <div className="w-full grid md:grid-cols-3 grid-cols-1 place-items-center  md:gap-x-8 gap-y-16 gap-0 mb-14">
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
                Soft, durable, and available in a variety of colors.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "knit",
      label: "Knit",
      content: (
        <div className="w-full grid md:grid-cols-3 grid-cols-1 place-items-center md:gap-x-8 gap-y-16 gap-0 mb-14">
          <div className="md:w-72 sm:w-96 w-64 h-full rounded-md bg-white shadow-md relative group overflow-hidden">
            <img
              src="/imgs/alvaro_knit_1.jpg"
              alt="Spandex Linen"
              className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md transition-transform duration-700 group-hover:scale-110 group-hover:opacity-0"
            />
            <img
              src="/imgs/alvaro_knit_2.jpg"
              alt="Alvaro Knit"
              className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md absolute top-0 left-0 transition-transform duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
            />
            <div className="text-center p-4">
              <h3 className="text-primary font-medium md:text-lg sm:text-lg text-base mb-2">
                Alvaro Knit
              </h3>
              <p className="text-gray-700 font-semibold md:text-lg sm:text-lg text-base mb-2">
                60.000/kg
              </p>
              <p className="text-gray-700 md:text-sm sm:text-sm text-xs font-normal">
                Soft, durable, and available in a variety of colors.
              </p>
            </div>
          </div>
          <div className="md:w-72 sm:w-96 w-64 h-full rounded-md bg-white shadow-md relative group overflow-hidden">
            <img
              src="/imgs/baby_dior_knit_1.jpg"
              alt="Baby Dior Knit"
              className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md transition-transform duration-700 group-hover:scale-110 group-hover:opacity-0"
            />
            <img
              src="/imgs/baby_dior_knit_2.jpg"
              alt="Baby Dior Knit"
              className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md absolute top-0 left-0 transition-transform duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
            />
            <div className="text-center p-4">
              <h3 className="text-primary font-medium md:text-lg sm:text-lg text-base mb-2">
                Baby Dior Knit
              </h3>
              <p className="text-gray-700 font-semibold md:text-lg sm:text-lg text-base mb-2">
                60.000/kg
              </p>
              <p className="text-gray-700 md:text-sm sm:text-sm text-xs font-normal">
                Soft, durable, and available in a variety of colors.
              </p>
            </div>
          </div>
          <div className="md:w-72 sm:w-96 w-64 h-full rounded-md bg-white shadow-md relative group overflow-hidden">
            <img
              src="/imgs/bondru_knit_1.jpg"
              alt="Bondru Knit"
              className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md transition-transform duration-700 group-hover:scale-110 group-hover:opacity-0"
            />
            <img
              src="/imgs/bondru_knit_2.jpg"
              alt="Bondru Knit"
              className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md absolute top-0 left-0 transition-transform duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
            />
            <div className="text-center p-4">
              <h3 className="text-primary font-medium md:text-lg sm:text-lg text-base mb-2">
                Bondru Knit
              </h3>
              <p className="text-gray-700 font-semibold md:text-lg sm:text-lg text-base mb-2">
                60.000/kg
              </p>
              <p className="text-gray-700 md:text-sm sm:text-sm text-xs font-normal">
                Soft, durable, and available in a variety of colors.
              </p>
            </div>
          </div>
          <div className="md:w-72 sm:w-96 w-64 h-full rounded-md bg-white shadow-md relative group overflow-hidden">
            <img
              src="/imgs/condru_knit_1.jpg"
              alt="Condru Knit"
              className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md transition-transform duration-700 group-hover:scale-110 group-hover:opacity-0"
            />
            <img
              src="/imgs/condru_knit_2.jpg"
              alt="Condru Knit"
              className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md absolute top-0 left-0 transition-transform duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
            />
            <div className="text-center p-4">
              <h3 className="text-primary font-medium md:text-lg sm:text-lg text-base mb-2">
                Condru Knit
              </h3>
              <p className="text-gray-700 font-semibold md:text-lg sm:text-lg text-base mb-2">
                60.000/kg
              </p>
              <p className="text-gray-700 md:text-sm sm:text-sm text-xs font-normal">
                Soft, durable, and available in a variety of colors.
              </p>
            </div>
          </div>
          <div className="md:w-72 sm:w-96 w-64 h-full rounded-md bg-white shadow-md relative group overflow-hidden">
            <img
              src="/imgs/madeline_knit_black_1.jpg"
              alt="Madeline Knit Black"
              className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md transition-transform duration-700 group-hover:scale-110 group-hover:opacity-0"
            />
            <img
              src="/imgs/madeline_knit_black_2.jpg"
              alt="Madeline Knit Black"
              className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md absolute top-0 left-0 transition-transform duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
            />
            <div className="text-center p-4">
              <h3 className="text-primary font-medium md:text-lg sm:text-lg text-base mb-2">
                Madeline Knit Black
              </h3>
              <p className="text-gray-700 font-semibold md:text-lg sm:text-lg text-base mb-2">
                60.000/kg
              </p>
              <p className="text-gray-700 md:text-sm sm:text-sm text-xs font-normal">
                Soft, durable, and available in a variety of colors.
              </p>
            </div>
          </div>
          <div className="md:w-72 sm:w-96 w-64 h-full rounded-md bg-white shadow-md relative group overflow-hidden">
            <img
              src="/imgs/madeline_knit_brown_1.jpg"
              alt="Madeline Knit Brown"
              className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md transition-transform duration-700 group-hover:scale-110 group-hover:opacity-0"
            />
            <img
              src="/imgs/madeline_knit_brown_2.jpg"
              alt="Madeline Knit Brown"
              className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md absolute top-0 left-0 transition-transform duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
            />
            <div className="text-center p-4">
              <h3 className="text-primary font-medium md:text-lg sm:text-lg text-base mb-2">
                Madeline Knit Brown
              </h3>
              <p className="text-gray-700 font-semibold md:text-lg sm:text-lg text-base mb-2">
                60.000/kg
              </p>
              <p className="text-gray-700 md:text-sm sm:text-sm text-xs font-normal">
                Soft, durable, and available in a variety of colors.
              </p>
            </div>
          </div>
          <div className="md:w-72 sm:w-96 w-64 h-full rounded-md bg-white shadow-md relative group overflow-hidden">
            <img
              src="/imgs/naro_knit_1.jpg"
              alt="Naro Knit"
              className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md transition-transform duration-700 group-hover:scale-110 group-hover:opacity-0"
            />
            <img
              src="/imgs/naro_knit_2.jpg"
              alt="Naro Knit"
              className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md absolute top-0 left-0 transition-transform duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
            />
            <div className="text-center p-4">
              <h3 className="text-primary font-medium md:text-lg sm:text-lg text-base mb-2">
                Naro Knit
              </h3>
              <p className="text-gray-700 font-semibold md:text-lg sm:text-lg text-base mb-2">
                60.000/kg
              </p>
              <p className="text-gray-700 md:text-sm sm:text-sm text-xs font-normal">
                Soft, durable, and available in a variety of colors.
              </p>
            </div>
          </div>
          <div className="md:w-72 sm:w-96 w-64 h-full rounded-md bg-white shadow-md relative group overflow-hidden">
            <img
              src="/imgs/osaka_knit_1.jpg"
              alt="Osaka Knit"
              className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md transition-transform duration-700 group-hover:scale-110 group-hover:opacity-0"
            />
            <img
              src="/imgs/osaka_knit_2.jpg"
              alt="Osaka Knit"
              className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md absolute top-0 left-0 transition-transform duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
            />
            <div className="text-center p-4">
              <h3 className="text-primary font-medium md:text-lg sm:text-lg text-base mb-2">
                Osaka Knit
              </h3>
              <p className="text-gray-700 font-semibold md:text-lg sm:text-lg text-base mb-2">
                60.000/kg
              </p>
              <p className="text-gray-700 md:text-sm sm:text-sm text-xs font-normal">
                Soft, durable, and available in a variety of colors.
              </p>
            </div>
          </div>
          <div className="md:w-72 sm:w-96 w-64 h-full rounded-md bg-white shadow-md relative group overflow-hidden">
            <img
              src="/imgs/twice_knit_1.jpg"
              alt="Twice Knit"
              className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md transition-transform duration-700 group-hover:scale-110 group-hover:opacity-0"
            />
            <img
              src="/imgs/twice_knit_2.jpg"
              alt="Twice Knit"
              className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md absolute top-0 left-0 transition-transform duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
            />
            <div className="text-center p-4">
              <h3 className="text-primary font-medium md:text-lg sm:text-lg text-base mb-2">
                Twice Knit
              </h3>
              <p className="text-gray-700 font-semibold md:text-lg sm:text-lg text-base mb-2">
                50.000/kg
              </p>
              <p className="text-gray-700 md:text-sm sm:text-sm text-xs font-normal">
                Soft, durable, and available in a variety of colors.
              </p>
            </div>
          </div>
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
                Soft, durable, and available in a variety of colors.
              </p>
            </div>
          </div>
          <div className="md:w-72 sm:w-96 w-64 h-full rounded-md bg-white shadow-md relative group overflow-hidden">
            <img
              src="/imgs/waffle_knit_white_1.jpg"
              alt="Waffle Knit White"
              className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md transition-transform duration-700 group-hover:scale-110 group-hover:opacity-0"
            />
            <img
              src="/imgs/waffle_knit_white_2.jpg"
              alt="Waffle Knit White"
              className="rounded-t-md w-full md:h-64 sm:h-64 h-56 mb-4 shadow-md absolute top-0 left-0 transition-transform duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
            />
            <div className="text-center p-4">
              <h3 className="text-primary font-medium md:text-lg sm:text-lg text-base mb-2">
                Waffle Knit White
              </h3>
              <p className="text-gray-700 font-semibold md:text-lg sm:text-lg text-base mb-2">
                60.000/kg
              </p>
              <p className="text-gray-700 md:text-sm sm:text-sm text-xs font-normal">
                Soft, durable, and available in a variety of colors.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "scuba",
      label: "Scuba",
      content: (
        <div className="w-full grid md:grid-cols-3 grid-cols-1 place-items-center md:gap-x-8 gap-y-16 gap-0 mb-14">
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
                Soft, durable, and available in a variety of colors.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "spandex",
      label: "Spandex",
      content: (
        <div className="w-full grid md:grid-cols-3 grid-cols-1 place-items-center md:gap-x-8 gap-y-16 gap-0 mb-14">
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
                10000
              </p>
              <p className="text-gray-700 md:text-sm sm:text-sm text-xs font-normal">
                Soft, durable, and available in a variety of colors.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState<string>("dryfit");

  return (
    <div className="bg-gray-100 w-full h-full md:px-28 px-8 py-20 md:mt-28 mt-24">
      <div className="text-center mb-14">
        <h1 className="text-primary font-bold md:text-6xl sm:text-2xl text-xl mb-4">
          Produk Kami
        </h1>
        <p className="text-gray-700 font-normal md:text-lg sm:text-base text-sm">
          Kami menyediakan berbagai macam produk tekstil berkualitas tinggi yang
          disesuaikan dengan kebutuhan Anda.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="md:text-base sm:text-base text-xs font-medium text-center text-gray-700 border-b border-gray-500 dark:text-gray-700 dark:border-gray-700 flex justify-center">
        <ul className="flex flex-wrap">
          {tabsData.map((tab) => (
            <li key={tab.id} className="me-2">
              <button
                onClick={() => setActiveTab(tab.id)} // Set active tab when clicked
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === tab.id
                    ? "text-primary border-primary dark:text-blue-500 dark:border-primary"
                    : "border-transparent hover:text-primary hover:border-primary dark:hover:text-primary"
                }`}
                aria-current={activeTab === tab.id ? "page" : undefined}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Tabs Content */}
      <div className="mt-4 p-4">
        {tabsData.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="tab-content">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
