// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

function listBelanjaan(param) {
  let arrListBel = [];
  for (let i = 0; i < param.length; i++) {
    let list = "- " + param[i].nama + " x " + param[i].kuantitas;
    arrListBel.push(list);
  }
  return arrListBel;
}

function totalBelanjaan(param) {
  let total = 0;
  for (let i = 0; i < param.length; i++) {
    total = total + param[i].harga * param[i].kuantitas;
  }
  return total;
}

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
