function arrayMin(arr) {
    let min = arr.reduce((acc, curr) => (acc < curr ? acc : curr));
       return min;
   
   }
   
   function arrayMax(arr) {
    let max = arr.reduce((acc, curr) => (acc > curr ? acc : curr));
       return max;
   
   }