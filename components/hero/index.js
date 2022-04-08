import React from "react";
import Navbar from "../Navbar";
import Button from "../button";
function index() {
  return (
    <section className="min-w-full" id="#home">
      <div className="bg-blue-500 pb-10">
        <div className="mx-auto px-10 2xl:px-0">
          <Navbar />
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className="mx-auto flex flex-col items-center my-auto">
              <h1 className="xs:text-center sm:text-lg sm:mt-10 sm:text-center md:text-xl lg:text-3xl w-full text-white font-semibold font-mono 2xl:w-6/12 xl:w-8/12 lg:w-10/12 text-left mx-auto leading-relaxed">
                Pengkajian Phlebitis pada Pasien Rawat Inap dengan VIP Score
              </h1>
              <p className="text-white sm:text-md md:text-lg text-left lg:text-xl mt-3 leading-relaxed">
                (Visual Infusion Phlebitis)
              </p>
              <Button
                className=" xs:hidden sm:hidden md:flex lg:flex mx-auto flex mt-8"
                href="#detail"
                pill
                variant="blue"
              >
                Apa Itu VIP
              </Button>
            </div>
            <div className="w-3/4 sm:m-20 md:m-0 lg:m-0">
              <img
                className="xs:w-3/4 xs:mx-auto xs:my-auto xs:ml-16 sm:w-3/4 sm:m-10 sm:mt-5  md:w-full lg:w-full"
                src="/assets/illus-2.png"
                alt="image-illus"
              />
            </div>
            <Button
              className="md:hidden lg:hidden mx-auto flex mt-8"
              href="#detail"
              pill
              variant="blue"
            >
              Apa Itu VIP
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
