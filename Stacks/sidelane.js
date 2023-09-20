function sideLane(n,arr){
    let j=0
    let min=1
    let arr2=[]
    let stack=[]
    arr2[j]=min
    for(let i=0;i<=n;i++){
        while(stack.length!==0 && j<n&&stack[stack.length-1]===arr2[j]){
            stack.pop()
            min++
            j++
            arr2[j]=min
            // console.log(j,min)
            if(j===n){
                return 'yes'
            }
        }
        stack.push(arr[i])
    }
    return "no"
}