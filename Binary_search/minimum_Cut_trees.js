function fun(mid,arr,t){
    let sum=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=mid){
            let diff=arr[i]-mid
            sum+=diff
        }
    }
    return sum
}
function cutMinimum(arr,t){
  let max=-Infinity
  for(let i=0;i<arr.length;i++){
    max=Math.max(max,arr[i])
  }
  let start=0,end=max
  let mid
  while(start<=end){
    mid=Math.floor(start+((end-start)/2))
    let sum=fun(mid,arr,t)
    if(sum==t){
        return mid
    }else if(sum>t){
        start=mid
    }else{
        end=mid-1
    }
  }
  console.log('here')
  return -1
}
const arr=[10,15,17,20]
let c=cutMinimum(arr,6)
module.exports={c}