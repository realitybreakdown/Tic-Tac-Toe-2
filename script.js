/*var origBoard;
const huPlayer = 'O';
const aiPlayer = 'X';
// Where on the board there's a win (Combos)
 const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]

]
*/

const cell = document.querySelectorAll('.cell');


function startGame() {
    document.turn = "X";
    setMessage(document.turn + " gets turn")
    for (var i = 0; i < cell.length; i++) {
        cell[i].innerText = ''; 
        // restart highlight each square 
        cell[i].style.removeProperty('background-color');
        cell[i].addEventListener('click', nextMove);
    }
}

function setMessage(msg) {
    document.getElementById("message").innerText = msg;
}

function nextMove(cell) {
    if (cell.innerText == '') {
        cell.innerText = document.turn;
        switchTurn();
    } else {
        setMessage("Nope")
    }
}


function switchTurn() {
    if(document.turn == "X") {
        document.turn = "O";
    } else {
        document.turn = "X";
    }
    setMessage("It's " + document.turn + "'s turn")
}

function emptyBoard(replay) {
    document.getElementById("restart").reset();
}