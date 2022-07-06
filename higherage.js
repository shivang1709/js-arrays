const highAge = (N, Arr) => 
{
  let arr=[]
  let j=0
  for(let i=0; i<N; i++){
    if(Arr[i]>=18){
      arr[j++]=Arr[i]
    }
  }
  return arr
};
N=6;
let Arr=[25,45,12,34,19,18];