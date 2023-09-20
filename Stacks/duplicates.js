function duplicates(str){
    let stack=[]
    let n=str.length
    for(let i=0;i<n;i++){
        if(stack.length!==0 && stack[stack.length-1]===str[i]){
            stack.pop()
        }else{
            stack.push(str[i])
        }
    }
    if(stack.length===0){
        console.log("Empty String")
    }else{
        console.log(stack.join(''))
    }
}