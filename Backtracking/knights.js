function knight(row,col,board,knights){
    if(knights===0){
        display(board)
        console.log(board)
        return
    }
    if(row===board.length-1&&col===board.length){
        return
    }
    if(col===board.length){
        knight(row+1,0,board,knights)
        return
    }
    if(isSafe(board,row,col)){
        board[row][col]=true
        knight(row,col+1,board,knights-1)
        board[row][col]=false
    }
    knight(row,col+1,board,knights)
}
function isSafe(board,row,col){
 if(isValid(row-2,col-1,board)){
 if(board[row-2][col-1]){
    return false
 }
 }
 if(isValid(row-2,col+1,board)){
    if(board[row-2][col+1]){
       return false
    }
}
if(isValid(row-1,col-2,board)){
        if(board[row-1][col-2]){
           return false
        }
}
if(isValid(row-1,col+2,board)){
    if(board[row-1][col+2]){
       return false
    }
}
return true
}
function isValid(row,col,board){
if(row>=0&&row<board.length&&col>=0&&col<board.length){
    return true
}
return false
}
function display(board){
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board.length;j++){
            if(board[i][j]){
                board[i][j]="K"
            }else{
                board[i][j]="X"
            }
        }
    }
}
const board=new Array(4)
for(let i=0;i<board.length;i++){
    board[i]=[]
    for(let j=0;j<board.length;j++){
        board[i].push(false)
    }
}
console.log(board)
const knightsPrinting=knight(0,0,board,4)
module.exports={knightsPrinting}