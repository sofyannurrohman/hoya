import React from "react";
import { useSelector } from "react-redux";
export default function Index() {
  const dataScore = useSelector((state) => state.report.dataScore);
  if (dataScore.score == "") {
    return <div></div>;
  }
  return (
    <div className={`card text-white shadow-2xl  rounded ${dataScore.color}`}>
      <h1>
        <span className="font-semibold">Anda Memilih variabel :</span>{" "}
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
