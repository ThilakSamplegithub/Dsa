function insertionSort(arr){
    let n=arr.length
for(let i=0;i<=n-2;i++){
    for(let j=i+1;j>0;j--){
        if(arr[j]<arr[j-1]){
            let temp=arr[j-1]
            arr[j-1]=arr[j]
            arr[j]=temp
        }else{
            break;
        }
    }
    // console.log(arr)
}
return arr
}
let arr=[-5,-94,-13,-22,-11]
const ins = insertionSort(arr)
module.exports={ins}