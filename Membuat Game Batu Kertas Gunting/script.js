var konfirmsi = true;
while (konfirmsi) {
  // Menangkap  Pilihan Player
  var p = prompt("Silahkan Pilih: batu, kertas, gunting");

  // Menangkap Pilihan Ai
  // Mengenerate bilangan random
  var comp = Math.random();

  if (comp < 0.34) {
    comp = "Batu" || "batu";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "Kertas" || "kertas";
  } else {
    comp = "Gunting" || "gunting";
  }

  //Menentukan rules
  var hasil = "";
  if (p == comp) {
    hasil = "SERI";
  } else if (p == "batu") {
    // if (comp == "Kertas") {
    //   hasil = "KALAH";
    // } else{
    //   hasil = "MENANG"
    // }
    hasil = comp == "kertas" ? "Kalah 🤣🤣🤣🤣🤣" : "Menang 😎";
  } else if (p == "kertas") {
    // if (comp == "Batu") {
    //   hasil = "MENANG";
    // } else {
    //   hasil = "KALAH";
    // }
    hasil = comp == "batu" ? "Menang 😎" : "Kalah 🤣🤣🤣🤣";
  } else if (p == "gunting") {
    hasil = comp == "batu" ? "Kalah 🤣🤣🤣🤣" : "Menang 😎";
  } else {
    hasil = "harap memasukan pilihan yang benar!";
  }

  // Tampilkan hasil pertandingan
  alert(
    "Anda memasukkan: " +
      p +
      " dan AI memasukkan: " +
      comp +
      "\nMaka hasilnya : Anda " +
      hasil
  );
  konfirmsi = confirm("Apakah Anda ingin bermain lagi ? ");
}
alert("Terimakasih Sudah Bermain👍");
