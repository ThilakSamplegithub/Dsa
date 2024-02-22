const arr=[0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1]
function swap(arr){
let l=0,r=arr.length-1
let temp
while(l<r){
  if(arr[l]<arr[r]){
    l++
    r--
  }else if(arr[l]>arr[r]){
    temp=arr[l]
    arr[l]=arr[r]
    arr[r]=temp
    l++
    r--
  }else if (arr[r]===1){
    r--
  }else if(arr[r]===0){
    l++
  }
}
  return arr
}
 console.log(swap(arr))