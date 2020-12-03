let arr1 = ["a", "a", "c"];
let arr2 = ["a", "x", "b"];

function compare(arr1, arr2) {
    const array = [];

    arr1.map((item, index) => {
      if (item == arr2[index]) {
        array.push(`jawaban benar maka cetak 1`);
      } else {
        array.push(`jawaban salah maka cetak 0`);
      }
    });
    return array;
    console.log(arr1);
  }
