const findCount = (N, K, Arr) => 
{
    let count =0;
    for(let i=0; i<N;i++){
      if(Arr[i]===K){
        count+=1;
        
      }
    }
    return count;
};
let N=4;
let K=3;
let Arr=[3,3,1,2];