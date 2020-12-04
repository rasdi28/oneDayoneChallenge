array1 = ["a","a","c"];
array2 = ["a","b","c"];

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

