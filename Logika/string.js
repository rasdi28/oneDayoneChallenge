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
  
  console.log(tengah("hello"));