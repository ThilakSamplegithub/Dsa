function pre(x){
    switch(x){
      case "^":return 1000
      case "*": return 100
      case "/": return 100
      case "+": return 1
      case "-":return 1
    }
  }
  function infix(arr){
    const stack=[]
    let temp=''
    const operators=['^', '*', '/', '+', '-','(',")"]
    for(let i=0;i<arr.length;i++){
      if(!operators.includes(arr[i])){
        temp+=arr[i]
      }else if(arr[i]==='('){
        stack.push(arr[i])
      }else if(!stack.length){
        stack.push(arr[i])
      }else if(arr[i]===")"){
        while(stack[stack.length-1]!=="("){
          temp+=stack.pop()
        }
        stack.pop()
      }else if(pre(arr[i])>pre(stack[stack.length-1])){
        stack.push(arr[i])
      }else{
        while(stack.length && pre(arr[i])<=pre(stack[stack.length-1])){
          temp+=stack.pop()
        }
        stack.push(arr[i])
      }
    }
    while(stack.length){
      temp+=stack.pop()
    }
    return temp
  }
  const inf=infix("K+L-M*N+(O^P)*W/U/V*T+Q")
  module.exports={inf}