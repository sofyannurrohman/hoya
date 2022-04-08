import React from "react";
import Navbar from "../Navbar";
import Button from "../button";
function index() {
  return (
    <section className="min-w-full" id="#home">
      <div className="bg-blue-500 pb-10">
        <div className="container mx-auto px-10 2xl:px-0">
          <Navbar />
          <div className="flex w-full h-fit text-center xl:mt-8 lg:mt-8 md:mt-6 flex-row space-x-10 justify-items-center">
            <div className="h-fit mx-auto 2xl:px-0 my-auto">
              <h1 className="sm:text-xl md:text-3xl w-full text-white font-semibold font-mono 2xl:w-6/12 xl:w-8/12 lg:w-10/12 sm:text-left lg:text-center mx-auto leading-relaxed">
                Pengkajian Phlebitis pada Pasien Rawat Inap dengan VIP Score
              </h1>
              <p className="text-white text-2xl 2xl:w-4/12 xl:w-4/12 lg:w-full mt-3 mx-auto leading-relaxed">
                (Visual Infusion Phlebitis)
              </p>
              <Button href="#detail" pill variant="blue" className="mt-10">
                Apa Itu VIP
              </Button>
            </div>
            <div className="sm:w-16 md:w-7/12  w-full px-10">
              <img className="w-full" src="/assets/illus-2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default index;
