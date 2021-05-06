 const reformatNumber = function(number) {
   let noSpace = number.replace(/\s/g,"").replace(/-/g, "");
   let arr = noSpace.split('');

   let threeDigits = 3;
   let twoDigits = 2;
   let phone = "";

   while(arr.length > 0) {
      if(arr.length === 4) {
         twoDigits = 2;
         while(twoDigits > 0) {
               phone += arr.shift()
               twoDigits--;
         }
         phone += '-';
      } else if(arr.length === 2) {
         twoDigits = arr.length;
         while(twoDigits > 0) {
               phone += arr.shift();
               twoDigits--;
         }
         return phone;
      } else if(arr.length === 3) {
         threeDigits = arr.length;
         while(threeDigits > 0) {
               phone += arr.shift();
               threeDigits--;
         }
         return phone;
      } else if(arr.length > 3){
         threeDigits = 3;
         while(threeDigits > 0) {
               phone += arr.shift();
               threeDigits--;
         }
         phone += '-';
      }
   }
}

 
// TESTING
console.log(reformatNumber("1-23-45 6"));
console.log(reformatNumber("123 4-567"));
console.log(reformatNumber("123 4-5678"));
console.log(reformatNumber("12"));
console.log(reformatNumber("--17-5 229 35-39475 "));