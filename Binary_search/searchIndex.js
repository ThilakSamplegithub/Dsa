function searchIndex(arr,target){
    // console.log("hi")
    let start=0
    let end=arr.length-1
    while(start<=end){
        let mid=start+((end-start)/2)
        mid=Math.floor(mid)
        // console.log(mid)
        if(arr[mid]===target){
            return mid
        }else if(target<arr[mid]){
            end=mid-1
        }else {
            start=mid+1
        }
    }
    return -1
}
const arr=[-12,-10,-1,0,2,5,6,9,11,18,22,25,29],target=-1
// console.log(arr)
const s=searchIndex(arr,target)
console.log(s)
module.exports={s}