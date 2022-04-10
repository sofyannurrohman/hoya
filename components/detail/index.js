import React from "react";
import SectionTitle from "../SectionTitle";
function index() {
  return (
    <section className="py-10 md:mt-10" id="detail">
      <div className="mx-auto px-3 2xl:px-0">
        <h1 className="text-center font-extrabold text-blue-700 xs:text-lg sm:text-2lg md:text-2xl  ">
          VIP (Visual Infusion Phlebitis) Score.
        </h1>

        <div className="flex h-full md:items-start flex-wrap xl:w-9/12 mx-auto mt-10">
          <div className="xs:w-fit md:w-6/12 h-fit  w-full px-10 mb-10 md:mb-0">
            <img
              src="/assets/illus.png"
              className="w-full h-full
            "
            />
          </div>
          <div className="xs:w-fit sm:w-fit md:w-6/12 ">
            <p className="flex text-base leading-relaxed font-semibold text-gray-700 mb-4 italic">
              VIP Score merupakan skala visual plebitis yang digunakan untuk
              mendeteksi dini terjadinya plebitis dan penentuan yang tepat untuk
              skor plebitis, melalui pengamatan visual yang dilakukan oleh
              perawat. VIP Score ini dikembangkan oleh Andrew Jackson, Perawat
              Konsultan Terapi dan Perawatan Intravena Rumah Sakit Umum
              Rotherham, NHS Trustt.
            </p>
            <img
              className="xs:hidden sm:flex sm:max-w-fit md:hidden lg:flex lg:w-full lg:h-[550px]"
              src="/assets/vipscore1.jpg"
            />
          </div>
        </div>
      </div>
      <img
        className="px-1 w-full xs:h-96 sm:hidden md:flex md:w-full md:h-full lg:hidden mt-4"
        src="/assets/vipscore1.jpg"
      />
    </section>
  );
}

export default index;
