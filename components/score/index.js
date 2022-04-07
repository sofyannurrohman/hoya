import React from "react";
import { useSelector } from "react-redux";
export default function Index() {
  const dataScore = useSelector((state) => state.report.dataScore);

  return (
    <div
      className={
        "card w-full text-white  bg-sky-700 shadow-2xl border-sky-800 rounded " +
        dataScore.color
      }
    >
      <h1>
        <span className="font-semibold">
          Tn/Ny SDA, Anda Memilih variabel :
        </span>{" "}
        {dataScore.pilihan}
      </h1>
      <h1>
        <span className="font-semibold">Skor Anda:</span> {dataScore.score}
      </h1>
      <h1>
        <span className="font-semibold">Tingkat Phlebitis:</span>{" "}
        {dataScore.name}
      </h1>
      <div className="flex">
        <div>
          <h1 className="font-semibold">Rekomendasi Anda: </h1>
          <div className="flex flex-col">
            <h1>{dataScore.solution}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
