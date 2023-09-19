function smallerNeighbourEl(n,arr){
    //console.log(n,arr)
    let stack=[]
    let ans=[]
    for(let i=0;i<=n-1;i++){
        while(stack.length!==0 && stack[stack.length-1]>=arr[i]){
            stack.pop()
        }
        if(stack.length===0){
            ans.push(-1)
        }else if(stack[stack.length-1]<arr[i]){
            ans.push(stack[stack.length-1])
        }
        stack.push(arr[i])
    }
    console.log(ans.join(" "))
}
let n=8
const arr=[39,27,11,4,24,32,32,1] //output:-1 -1 -1 -1 4 24 24 -1
smallerNeighbourEl(n,arr)