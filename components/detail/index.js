import React from "react";
import SectionTitle from "../SectionTitle";
function index() {
  return (
    <section className="py-28" id="detail">
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
          <div className="md:w-6/12 sm:w-7/12 w-full">
            <p className="text-base leading-relaxed font-semibold text-gray-700 italic">
              VIP Score merupakan skala visual plebitis yang digunakan untuk
              mendeteksi dini terjadinya plebitis dan penentuan yang tepat untuk
              skor plebitis, melalui pengamatan visual yang dilakukan oleh
              perawat. VIP Score ini dikembangkan oleh Andrew Jackson, Perawat
              Konsultan Terapi dan Perawatan Intravena Rumah Sakit Umum
              Rotherham, NHS Trustt.
            </p>
            <img
              className="md:w-full items-stretch sm:w-7/12 w-full mt-4"
              src="/assets/vipscore1.jpg"
            />
          </div>
          <div className="container"></div>
        </div>
      </div>
    </section>
  );
}

export default index;
