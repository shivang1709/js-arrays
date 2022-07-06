
const Find_Num = (array,N,M) => 
{
  for(let i=0; i<N;i++){
    if(array[i]===M){
      return "YES"
    }
  }
  return "NO"
};
let N=5;
let array=[1,2,3,4,5,]
M=2;