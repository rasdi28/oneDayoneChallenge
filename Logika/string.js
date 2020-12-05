function tengah(str) {
    var posisi, panjang;
    if ((str.length % 2) == 0) {
      posisi = str.length / 2 - 1;
      panjang = 2;
    } else {
      posisi = (str.length - 1) / 2;
      panjang = 1;
    }
    
    return str.substring(posisi, posisi + panjang);
  }
  
  console.log(tengah("ABCDEF"));
  