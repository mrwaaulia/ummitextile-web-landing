import React from "react";

function About() {
  return (
    <div>
      <section
        // md:-translate-y-[40rem] sm:-translate-y-[40rem] -translate-y-[42rem]
        id="about"
        className="bg-primary w-full h-fit md:px-20 md:py-20 px-8 pt-20 pb-20"
      >
        <div className="md:flex gap-14 text-justify justify-center items-center">
          <img
            src="/imgs/about.jpg"
            alt="about us"
            className="md:w-[120rem] w-full md:h-[34rem] h-[24rem] rounded-md"
          />
          <div className="md:pt-4 sm:pt-14 pt-12 text-white md:text-base text-sm">
            <h1 className="md:text-6xl sm:text-4xl text-2xl font-bold text-secondary md:mb-12 sm:mb-8 mb-6">
              Tentang Kami
            </h1>
            <p>
              Didirikan pada tahun 2018, PT Ummi Textile hadir sebagai supplier
              kain terpercaya di Indonesia. Dengan slogan "The Best Cheap" kami
              menyediakan kain berkualitas tinggi dengan harga terjangkau untuk
              memenuhi kebutuhan industri tekstil dan UMKM.
            </p>
            <br />
            <p>
              Sebagai perusahaan pribumi, kami mendukung kemajuan UMKM Indonesia
              dan bertekad menguasai pasar dari Sabang hingga Merauke, bahkan
              Asia Tenggara. Kami menjamin harga yang kompetitif dan kualitas
              kain sesuai kebutuhan Anda. PT Ummi Textile bisa menjadi Mitra
              terbaik untuk kemajuan bisnis tekstil Anda!
            </p>
            <div className="w-24 h-2 rounded-sm bg-secondary mt-10 md:translate-x-[35rem] sm:translate-x-[32.5rem] translate-x-[14rem]"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
