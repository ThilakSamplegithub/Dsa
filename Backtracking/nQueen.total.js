const board=new Array(4)
// let arr=[]
for(let i=0;i<board.length;i++){
  board[i]=[]
 for(let j=0;j<board.length;j++){
    board[i].push(false)
 }
}
let row=0
// console.log(board)
const displayBoard=(board)=>{
    for(let i=0;i<board.length;i++){
      for(let j=0;j<board.length;j++){
          if(board[i][j]){
              board[i][j]="Q"
          }
      }
    }
    console.log(board)
  }
let f=nQueens(board,row)
function nQueens(board,row){
    if(row===board.length){
        // console.log(board)
        displayBoard(board)
        return 1
    }
   let count=0
    for(let col=0;col<board.length;col++){
        if(isSafe(board,row,col)){
            board[row][col]=true
          count+=nQueens(board,row+1)
            board[row][col]=false
        }
    }
    return count
}
function isSafe(board,row,col){
    //check vertically
    let i=0
    while(i<row){
        if(board[i][col]){
            return false
        }
        i++
    }
    // check left diagonal
    i=row
    let j=col
    let min=Math.min(row,col)
    while(i>=row-min&&j>=col-min){
        if(board[i][j]){
            return false
        }
        i--,j--
    }
    i=row,j=col
   let newCol=board.length-1-col
     min=Math.min(row,newCol)
    while(i>=row-min&&j<=col+min){
        // console.log(i,j)
        // console.log(board[i][j])
     if(board[i][j]){
        return false
     }
     i--
     j++
    }
    return true
}
module.exports={f}
