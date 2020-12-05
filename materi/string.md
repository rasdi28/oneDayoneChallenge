## Belajar String
___
## Mengenal string
> study kasus
terdapat sebuah string jika jumlah string ganjil maka nilai tengah yang diambil . jika panjang string genap maka akan diambil 2 string tengah
contoh
> INPUTAN 1
```
rasdi
```
> OUTPUT 1
```
s
```
> INPUTAN 2
```
rohman
```
> OUTPUT
```
hm
```

___
JAWABAN

```
function tengah(str) {
    var position, length;
    if ((str.length % 2) == 0) {
      position = str.length / 2 - 1;
      length = 2;
    } else {
      position = (str.length - 1) / 2;
      length = 1;
    }
    
    return str.substring(position, position + length);
  }
  
  console.log(tengah("rasdi"));

```