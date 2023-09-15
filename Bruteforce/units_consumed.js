function unitsConsumed(n) {
    //write code here
    n=n-80
    let units=0
    if(n>=150){
       units+=50 
       n-=150
    }else{
        units+=Math.ceil(n/3)
        n=0
    }
    if(n>=500){
        units+=100
        n-=500
    }else{
        units+=Math.ceil(n/5)
        n=0
    }
    if(n){
        units+=n/10
    }
    console.log(units)
}
unitsConsumed(930)
//output:170 
//80 is hardcore deduction 