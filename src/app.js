let currentGo = 'X';

let board = [
    ['','',''], 
    ['','',''],
    ['','',''],
]

const boardPopulate = (cb=False) =>  {
    for (var layer = 0; layer  < 3; layer++) {
        for (var row = 0; row <3; row++) {
            const newElem = document.createElement("div")

            newElem.id = `board_${layer}-${row}_div`
            newElem.classList.add("square")
            newElem.setAttribute('onclick', 'select(this)')
            
            document.getElementById('board').appendChild(newElem)
        }
        document.getElementById('board').appendChild(document.createElement('br'))
    }
}

const select = (e) => {
    const id = e.id;
    const numID = id.split("_")[1].split("-");

    const layer = numID[0];
    const row = numID[1];
    
    const tile = getTileById(layer,row)
    const tileLetter = board[layer][row];

    if (tileLetter === '') {
        tile.innerText = currentGo;
        board[layer][row] = currentGo;
        currentGo = currentGo === 'X' ? 'O' : 'X'
    }
    
    
    document.getElementById('next').innerHTML = currentGo;
    
    winCheck()
}

const getTileById = (layer,row) => {
    return document.getElementById(`board_${layer}-${row}_div`)
}

const winCheck = () => {
    if (
        (board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') ||
        (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') ||
        (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') ||
        (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') ||
        (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') ||
        (board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') ||
        (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') ||
        (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X')
    ) {
        alert('X Wins!')
        setTimeout(()=>{
            document.location.href = document.URL;
        }, 1000)
    } else if (
        (board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O') ||
        (board[1][0] === 'O' && board[1][1] === 'O' && board[1][2] === 'O') ||
        (board[2][0] === 'O' && board[2][1] === 'O' && board[2][2] === 'O') ||
        (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') ||
        (board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O') ||
        (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O') ||
        (board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O') ||
        (board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O')
        
    ) {
        alert('O Wins!')
        setTimeout(()=>{
            document.location.href = document.URL;
        }, 1000)
    }
    else {
        var i = 0;

        for (const layer of board) {
            for (const row of layer) {
                if (row === 'X' || row === 'O') {
                    i++
                }
            }
        }

        if (i === 9) {
            alert('Tie!')
            setTimeout(()=>{
                document.location.href = document.URL;
            }, 1000)
        }
    }
    
}