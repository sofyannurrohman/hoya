import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { reportActions } from "../../store/reportSlice";
import Score from "../score";
import moment from "moment";
export default function Index() {
  const dispatch = useDispatch();
  const addReport = (event) => {
    event.preventDefault();
    const json = {
      timestamp: moment().format("DD MMMM YYYY HH:mm:ss"),
      tglPeriksa: moment(event.target.tglPeriksa.value).format(
        "DD MMMM YYYY HH:mm:ss"
      ),
      tglLahir: moment(event.target.tglLahir.value).format("DD MMMM YYYY"),
      tglInfus: moment(event.target.tglInfus.value).format(
        "DD MMMM YYYY HH:mm:ss"
      ),
      name: event.target.name.value,
      gender: event.target.gender.value,
      noRM: event.target.noRM.value,
      opsi1: event.target.opsi1.checked,
      opsi2: event.target.opsi2.checked,
      opsi3: event.target.opsi3.checked,
      opsi4: event.target.opsi4.checked,
      opsi5: event.target.opsi5.checked,
      opsi6: event.target.opsi6.checked,
      opsi7: event.target.opsi7.checked,
      opsi8: event.target.opsi8.checked,
      opsi9: event.target.opsi9.checked,
      opsi10: event.target.opsi10.checked,
    };
    dispatch(reportActions.addReport(json));
  };
  const reportList = useSelector((state) => state.report.reportList);
  console.log(reportList);
  const reset = (event) => {
    dispatch(reportActions.reset());
  };
  return (
    <>
      <section className="mb-10" id="survey">
        <div className="sm:mx-auto sm:w-full sm:max-w-xl">
          <h2 className=" sm:text-3lg md:text-xl lg:text-3xl mt-6 text-blue-700 text-center  font-extrabold ">
            MULAI PENGUJIAN SKOR V.I.P
          </h2>
          <div className="mt-5 px-5">
            <h3 className="mb-3 xs:text-base md:text-lg font-semibold">
              Petunjuk Pengisian:
            </h3>
            <p className="text-gray-500 xs:text-base">
              Pengkajian ini dilakukan oleh petugas berdasarkan gejala-gejala
              yang tampak pada pasien saat ini. Perhatikanlah beberapa
              pernyataan dibawah ini. Pilihlah pernyataan yang sesuai dengan
              kondisi pasien.
            </p>
          </div>
        </div>

        <div className="mt-8 xs:px-5 sm:mx-auto sm:w-full sm: sm:max-w-xl">
          <form
            className="mb-0 space-y-5 w-full "
            onSubmit={addReport}
            method="POST"
          >
            <div>
              <label className="block w-full text-lg font-medium text-gray-700 mb-2">
                Nama Pasien
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Masukkan nama Anda"
                required
                className="border-solid p-1 w-full border-2 border-indigo-600 rounded-md"
              />
            </div>
            <div>
              <label className="flex w-full text-lg font-medium text-gray-700 mb-2">
                Tanggal Pemeriksaan
              </label>
              <input
                id="tglPeriksa"
                name="tglPerisksa"
                type="datetime-local"
                label="Tanggal Pemeriksaan"
                placeholder="Masukkan tanggal pemeriksaan"
                required
                className="border-solid p-1 w-full text-gray-900 border-2 border-indigo-600 rounded-md"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                No. RM
              </label>
              <input
                id="noRM"
                name="noRM"
                type="text"
                label="No. RM"
                placeholder="Masukkan No.RM"
                required
                className="border-solid p-1 w-full text-gray-900 border-2 border-indigo-600 rounded-md"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Tanggal Lahir
              </label>
              <input
                id="tglLahir"
                name="tglLahir"
                type="date"
                required
                className="border-solid p-1 w-full border-2 border-indigo-600 rounded-md"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Jenis Kelamin
              </label>
              <input
                id="gender"
                name="gender"
                type="text"
                label="Jenis Kelamin"
                placeholder="Masukkan jenis kelamin"
                required
                className="border-solid p-1 w-full text-gray-900 border-2 border-indigo-600 rounded-md"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Tanggal Pemasangan Infus
              </label>
              <input
                id="tglInfux"
                name="tglInfus"
                type="datetime-local"
                required
                className="border-solid p-1 w-full border-2 border-indigo-600 rounded-md"
              />
            </div>

            <label className="block text-xl font-semibold text-gray-700 ">
              Pilih Penilaian dibawah ini
            </label>

            <div className="flex items-center">
              <input
                id="opsi1"
                name="opsi1"
                type="checkbox"
                className="w-5 h-5"
              />
              <label
                className="ml-2 block text-md text-gray-900"
                htmlFor="opsi1"
              >
                (1) Tempat suntikan tampak sehat
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="opsi2"
                name="opsi2"
                type="checkbox"
                className="w-5 h-5"
              />
              <label
                className="ml-2 block text-md text-gray-900"
                htmlFor="opsi2"
              >
                (2) Sedikit nyeri dekat tempat suntikan (IV site)
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="opsi3"
                name="opsi3"
                type="checkbox"
                className="w-5 h-5"
              />
              <label className="ml-2 block text-md text-gray-900">
                (3) Sedikit eritema/kemerahan pada tempat suntikan
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="opsi4"
                name="opsi4"
                type="checkbox"
                className="w-5 h-5"
              />
              <label className="ml-2 block text-md text-gray-900">
                (4) Nyeri dekat IV site
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="opsi5"
                name="opsi5"
                type="checkbox"
                className="w-5 h-5"
              />
              <label className="ml-2 block text-md text-gray-900">
                (5) Kemerahan
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="opsi6"
                name="opsi6"
                type="checkbox"
                className="w-5 h-5"
              />
              <label className="ml-2 block text-md text-gray-900">
                (6) Bengkak
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="opsi7"
                name="opsi7"
                type="checkbox"
                className="w-5 h-5"
              />
              <label className="ml-2 block text-md text-gray-900">
                (7) Nyeri di sepanjang kanul
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="opsi8"
                name="opsi8"
                type="checkbox"
                className="w-5 h-5"
              />
              <label className="ml-2 block text-md text-gray-900">
                (8) Pengerasan (indurasi)
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="opsi9"
                name="opsi9"
                type="checkbox"
                className="w-5 h-5"
              />
              <label className="ml-2 block text-md text-gray-900">
                (9) Vena cord teraba mengeras
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="opsi10"
                name="opsi10"
                type="checkbox"
                className="w-5 h-5"
              />
              <label className="ml-2 block text-md text-gray-900">
                (10) Demam
              </label>
            </div>

            <Score />

            <div className="flex w-full justify-center">
              <div className="mt-5">
                <button
                  type="submit"
                  className="w-fit flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Kirim Jawaban
                </button>
              </div>

              <div className="mt-5">
                <button
                  onClick={reset}
                  type="reset"
                  className="w-fit ml-10 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 xs-ml-5"
                >
                  Ulangi Jawaban
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
