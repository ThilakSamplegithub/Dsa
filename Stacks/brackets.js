function brackets(arr){
    let stack=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]==='{' || arr[i]==='(' || arr[i]==='[' ){
           stack.push(arr[i]) 
        } else{
            if(stack[stack.length-1]==='{' && arr[i]==='}' ||stack[stack.length-1]==='(' && arr[i]===')' ||stack[stack.length-1]==='[' &&  arr[i]===']' ){
                stack.pop()
            }else{
                console.log('not balanced')
                return 
            }
        }                   // {([])}
    }
    if(stack.length===0){
        console.log('balanced')
    }else{
      console.log('not balanced') 
    }
}