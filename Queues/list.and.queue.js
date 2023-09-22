function runProgram(input)
{
    input=input.trim().split('\n')
    let n=+input[0]
    let queue=[]
    let f=-1
    let r=-1
    for(let i=1;i<=n;i++){
        let a=input[i].trim().split(" ")
        if(a[0]==='E'){
            if(f===-1||r===-1){
                f=0
                r=0
        }else{
            r++
        }
       queue[r]=a[1] 
    }else{
        if(f===-1||f>r){
            console.log('Empty')
}else{
    console.log(queue[f])
    f++
}
}
}
}
//input:
// 4
// E 2
// E 3
// D
// D
//output:
//2
//3