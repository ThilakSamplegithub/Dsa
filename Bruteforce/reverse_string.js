
function reversingWord(str){
 let rev='',word=''
 for(let i=0;i<str.length;i++){
    if(str[i]!==" "){
    word=str[i]+word
    }else{
        rev+=word+" "
        word=""
    }
 }
 if(word){
    rev+=word
 }
 return rev
}
let r=reversingWord("This is how you reverse string without changing order")
module.exports={r}