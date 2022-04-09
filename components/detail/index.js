import React from "react";
import SectionTitle from "../SectionTitle";
function index() {
  return (
    <section className="py-28 mt-8" id="detail">
      <div className="container mx-auto px-10 2xl:px-0">
        <SectionTitle>VIP (Visual Infusion Phlebitis) Score.</SectionTitle>

        <div className="flex h-full md:items-start flex-wrap xl:w-9/12 mx-auto mt-10">
          <div className="md:w-6/12 h-fit  w-full px-10 mb-10 md:mb-0">
            <img
              src="/assets/illus.png"
              className="w-full h-full
            "
            />
          </div>
          <div className="xs:w-full sm:w-fit md:w-6/12 ">
            <p className="text-base leading-relaxed font-semibold text-gray-700 italic">
              VIP Score merupakan skala visual plebitis yang digunakan untuk
              mendeteksi dini terjadinya plebitis dan penentuan yang tepat untuk
              skor plebitis, melalui pengamatan visual yang dilakukan oleh
              perawat. VIP Score ini dikembangkan oleh Andrew Jackson, Perawat
              Konsultan Terapi dan Perawatan Intravena Rumah Sakit Umum
              Rotherham, NHS Trustt.
            </p>
            <img
              className="xs:hidden sm:flex sm:max-w-fit md:w-full lg:w-full mt-4"
              src="/assets/vipscore1.jpg"
            />
          </div>
          <div className="container"></div>
        </div>
      </div>
      <img
        className="px-5 sm:hidden md:hidden mt-4"
        src="/assets/vipscore1.jpg"
      />
    </section>
  );
}

export default index;
