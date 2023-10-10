function richard(n,arr){
    let l=0
    let r=n-1
    let sum=0
    // sum=arr[l]
    let sum2=0
    // sum2=arr[r]
    let count1=0
    let count2=0
    while(l<=r){      // here we can write as Instructor said r-l!==1
        //  sum=sum+arr[l]
         if(sum<=sum2*2){
             sum=sum+arr[l]
             l++
             count1++
            //  console.log(sum+' '+count1+" "+arr[r]*2)
         }else if(sum>sum2*2){
             sum2=sum2+arr[r]
                r--
                count2++
            //  sum=0
         }
    }
    console.log(`${count1} ${count2}`)
    
}
function runProgram(input)
{
    input=input.trim().split("\n")
    let tc=+input[0]
    let line=1
    for(let i=0;i<tc;i++){
        let n=+input[line]
        line++
        let arr=input[line].trim().split(" ").map(Number)
        line++
        richard(n,arr)
    }
}
if (process.env.USERNAME === "") {
     runProgram(``);
 } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
         read += input;
     });
     process.stdin.on("end", function () {
         read = read.replace(/\n$/, "");
         read = read.replace(/\n$/, "");
         runProgram(read);
     });
     process.on("SIGINT", function () {
         read = read.replace(/\n$/, "");
         runProgram(read);
         process.exit(0);
     });
 }
 //5
 // 2 9 8 2 7  and o/p is 3 2