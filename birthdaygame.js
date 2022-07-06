function Birthday_Game(arr,D ,M) {
    let sum = 0;
       let count = 0;
       for(let i = 0; i < M; i++){
         sum += arr[i];
       }
       if(sum === D){
         count++;
       }
       for(let i = M; i < arr.length; i++){
         sum += arr[i];
         sum -= arr[i - M];
         if(sum === D){
         count++;
       }
       }
       return count;
   }
   Birthday_Game([2, 2, 1, 3, 2], 4, 2)