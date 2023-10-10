function sudoku(board){
    let row=-1
    let col=-1
    let emptyLeft=true
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board.length;j++){
            if(board[i][j]===0){
                emptyLeft=false
                row=i
                col=j
                break;
            }
        }
    }
    if(emptyLeft){
        return true
    }
    for(let num=1;num<=9;num++){
        if(isSafe(board,row,col,num)){
            board[row][col]=num
            if(sudoku(board)){
                return true
            }else{
                board[row][col]=0
            }
        }
    }
    return false
}
function isSafe(board,row,col,num){
   //check row
   let j=0
   while(j<9){
    if(board[row][j]===num){
        return false
    }
    j++
   }
   let i=0
   while(i<9){
    if(board[i][col]===num){
        return false
    }
    i++
   }
   let start=row-row%3
   let end=col-col%3
   for(let r=start;r<start+3;r++){
    for(let c=end;c<end+3;c++){
        if(board[r][c]===num){
            return false
        }
    }
    return true
   }
}
const board=[
[5,3,0,0,7,0,0,0,0],
[6,0,0,1,9,5,0,0,0],
[0,9,8,0,0,0,0,0,0],
[8,0,0,0,6,0,1,0,3],
[4,0,0,8,0,3,0,0,1],
[7,0,0,0,2,0,0,0,6],
[0,6,0,0,0,0,2,8,0],
[0,0,0,4,1,9,0,0,5],
[0,0,0,0,8,0,0,7,9]
]
 const solve=sudoku(board)
      module.exports={solve,board}