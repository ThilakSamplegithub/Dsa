function financial(n,arr){
    let stack=[]
    let ans=[]
    for(let i=0;i<n;i++){
        let count=1
        while(stack.length!==0 && arr[stack[stack.length-1]]<=arr[i]){
            count=count+ans[stack[stack.length-1]]
            stack.pop()
        }
        ans.push(count)
        stack.push(i)
    }
    console.log(ans.join(" "))
}
n=6
const arr=[100,60,70,65,80,85] //1 1 2 1 4 5