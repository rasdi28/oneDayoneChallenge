const array1 = [1, 4, 9, 16];
var total = 0;

// pass a function to map
const map1 = array1.map(x => x * 2);
for (i=0;i<map1.length;i++){
    total +=map1[i];
}

console.log(map1);
console.log(total);
