function fun(steps,arr){
    let i=0
    while(i+2<arr.length){
        if(arr[i+2]===0){
            i+=2
            steps++
        }else{
            steps++
            i++
        }
    }
    if(arr[i]===0&&i<arr.length-1){
        i++
        steps++
    }
    return steps
}
// const result={fun}
module.exports={fun}
// console.log(fun(0,[0,0,1,0,0,1,0]))
//output must be 4