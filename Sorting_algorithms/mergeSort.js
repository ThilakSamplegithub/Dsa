/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    function mergeSort(nums){
if(nums.length===1){
        return nums
    }
  let mid=Math.floor(nums.length/2)
 let left= mergeSort(nums.slice(0,mid))  
 let right=mergeSort(nums.slice(mid,nums.length))
 return merge(left,right)
    }
   return mergeSort(nums)
function merge(left,right){
    let l=0,r=0,k=0
    const arr=new Array(left.length+right.length)
    while(l<left.length&&r<right.length&&k<arr.length){
        if(left[l]<right[r]){
            arr[k]=left[l]
            l++
        }else{
            arr[k]=right[r]
            r++
        }
        k++
    }
    while(l<left.length){
        arr[k]=left[l]
        l++
        k++
    }
    while(r<right.length){
        arr[k]=right[r]
        r++
        k++
    }
    return arr
}
};