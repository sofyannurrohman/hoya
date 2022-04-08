import { createSlice } from "@reduxjs/toolkit";

const reportSlice = createSlice({
  name: "report",
  initialState: {
    reportList: [],
    dataScore: {
      score: "",
      name: "",
      solution: "",
      color: "bg-orange-500",
      pilihan: "Silahkan melakukan pengkajian",
    },
  },
  reducers: {
    addReport: (state, action) => {
      const dataScore = countScore(action.payload);

      state.dataScore = dataScore;
      if (state.dataScore.score == "Tidak Memenuhi Kriteria") {
        return;
      } else {
        const json = {
          timestamp: action.payload.timestamp,
          tglPeriksa: action.payload.tglPeriksa,
          tglLahir: action.payload.tglLahir,
          tglInfus: action.payload.tglInfus,
          name: action.payload.name,
          gender: action.payload.gender,
          noRM: action.payload.noRM,
          opsi1: formatBool(action.payload.opsi1),
          opsi3: formatBool(action.payload.opsi3),
          opsi4: formatBool(action.payload.opsi4),
          opsi2: formatBool(action.payload.opsi2),
          opsi5: formatBool(action.payload.opsi5),
          opsi6: formatBool(action.payload.opsi6),
          opsi7: formatBool(action.payload.opsi7),
          opsi8: formatBool(action.payload.opsi8),
          opsi9: formatBool(action.payload.opsi9),
          opsi10: formatBool(action.payload.opsi10),
          score: dataScore.score,
          phlebitis: dataScore.name,
          solution: dataScore.solution,
        };
        state.reportList.push(json);
        const requestOptions = {
          mode: "no-cors",
          credentials: "include",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(json),
        };
        fetch(
          "https://script.google.com/macros/s/AKfycbwFiersem32UzLe_ylvpvdp5YsxPg61MLAUWc3IoAs4Z_Pi48rHp4OTVhfz52zyrvhu/exec?action=addReport",
          requestOptions
        ).then((response) => console.log(response));
      }
    },
    reset: (state, action) => {
      state.dataScore = {
        score: "",
        name: "",
        solution: "",
        color: "bg-white-500",
        pilihan: "Silahkan melakukan pengkajian",
      };
    },
  },
});
function selectedOption(json) {
  const opsi = [];
  if (json.opsi1) {
    opsi.push("1");
  }
  if (json.opsi2) {
    opsi.push("2");
  }
  if (json.opsi3) {
    opsi.push("3");
  }
  if (json.opsi4) {
    opsi.push("4");
  }
  if (json.opsi5) {
    opsi.push("5");
  }
  if (json.opsi6) {
    opsi.push("6");
  }
  if (json.opsi7) {
    opsi.push("7");
  }
  if (json.opsi8) {
    opsi.push("8");
  }
  if (json.opsi9) {
    opsi.push("9");
  }
  if (json.opsi10) {
    opsi.push("10");
  }
  return opsi;
}
function countScore(json) {
  const opsi = selectedOption(json);
  const text = opsi.toString();
  console.log(text);
  if (text == "1") {
    return {
      score: "0",
      name: "Tidak ada tanda Phlebitis",
      solution: "Observasi kanul (abocath)",
      color: "bg-green-500",
      pilihan: text,
    };
  } else if (text == "2" || text == "3") {
    return {
      score: "1",
      name: "Mungkin tanda dini dari Phlebitis",
      solution: "Observasi kanul",
      pilihan: text,
    };
  } else if (text == "4,5" || text == "4,6" || text == "5,6") {
    return {
      score: "2",
      name: "Stadium dini Phlebitis",
      solution: "Ganti Kanul",
      color: "bg-orange-500",
      pilihan: text,
    };
  } else if (text == "5,7,8") {
    return {
      score: "3",
      name: "Stadium moderat phlebitis",
      solution: "Ganti Kanul dan Pertimbangan Terapi",
      color: "bg-red-500",
      pilihan: text,
    };
  } else if (text == "5,7,8,9") {
    return {
      score: "4",
      name: "Stadium lanjut atau awal trombophlebitis",

      solution: "Ganti Kanul dan Pertimbangan Terapi",
      color: "bg-red-500",
      pilihan: text,
    };
  } else if (text == "5,7,8,9,10") {
    return {
      score: "5",
      name: "Stadium lanjut trombophlebitis",

      solution: "Ganti Kanul dan Mulai Pengobatan",
      color: "bg-red-500",
      pilihan: text,
    };
  } else {
    return {
      score: "Tidak Memenuhi Kriteria",
      name: "Tidak Memenuhi Kriteria",
      solution: "Silahkan Pengkajian Ulang Kembali",
      color: "",
      pilihan: text,
    };
  }
}

function formatBool(value) {
  if (value) {
    return "Ya";
  } else {
    return "Tidak";
  }
}

export const reportActions = reportSlice.actions;
export default reportSlice;
