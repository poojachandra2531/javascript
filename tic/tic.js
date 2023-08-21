let text= document.getElementById('playerText');
let restart = document.getElementById('restartBtn');
let boxes= Array.from(document.getElementsByClassName('box'));
let winningIndigator = getComputedStyle(document.body).getPropertyValue('--winning_blocks')
// console.log(boxes);


let O_text = "O";
let X_text = "X";
let currentPlayer = X_text;
let spaces= Array(9).fill(null);
// console.log(spaces)

const startGame=()=>{
    boxes.forEach(box => box.addEventListener('click',boxclicked));
}

function boxclicked(e){
    // console.log(e.target)

    const id = e.target.id
    if(!spaces[id]){
        spaces[id]=currentPlayer;
        e.target.innerText = currentPlayer;

        if(playerHasWon() !==false){
           playerText = `${currentPlayer} has won!`

           let winning_blocks = playerHasWon()
           winning_blocks.map( box => boxes[box].style.backgroundColor= winningIndigator)
           console.log(winning_blocks)
        }
        currentPlayer = currentPlayer == X_text ? O_text:X_text
    }
}
restart.addEventListener('click', renew)

function renew(){
    spaces.fill(null)
    boxes.forEach(box=>{
        box.innerText = ''
        
    })
    playerText = 'Tic-Tac-Toe'
    currentPlayer = X_text
}

const winningcombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

 function playerHasWon(){
    for (const condition of winningcombo){
        let [a,b,c] = condition 

        if (spaces[a] && (spaces[a]==spaces[b] && spaces[a] == spaces[c])){
            return [a,b,c]
        }
        
    }
    return false
 }
 








startGame()