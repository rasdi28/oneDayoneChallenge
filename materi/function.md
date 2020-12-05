#FUNGSI

contoh soal
```
checkExam(["a","b","c","d"],["a","b","c","c"]);

```
___
Array nilai  1 adalah sebuah jawaban benar dan nilai array 2 adalah jawaban siswa, jika jawaban yang benar diberikan nilai 4 dan jawaban salah adalah -1 dan tidak diisi diberi nilai 0. 

Jawaban
```
array1 = ["a","a","c"];
array2 = ["a","b","c"];

nilai = checkExam(array1,array2);
function checkExam(array1, array2){
    var nilai = 0;
    for (var i=0; i < array1.length; i++){
        if(array2[i]===""){
            nilai += 0
        }else {
            if(array1[i] === array2[i]){
                nilai += 4
            }else if (array1[i] !== array2[i]){
                nilai -=1

            }    
        }
         
    }
    return (nilai <0) ? 0 : nilai;
    
}
console.log(nilai);


```