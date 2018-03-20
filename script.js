
// creates a Sudoku board
function createTable(x = 9, y = 9){
    let body = document.getElementsByTagName('body')[0];
    let tbl = document.createElement('table');
    let tbody = document.createElement('tbody');


    for(let i = 0; i < y; i++){
        let tr = document.createElement('tr');
        for(let j = 0; j < x; j++){
            // set the edges of the sections of the sudoku board
            let classes = "";
            if (j % 3 == 0 && j != 0){
                classes += " boarderLeft";
            }
            if ((j + 1) % 3 == 0 && (j + 1) != 9){
                classes += " boarderRight";
            } 
            
            if (i % 3 == 0 && i != 0){
                classes += " boarderTop";
            }
            if ((i + 1) % 3 == 0 && (i + 1) != 9){
                classes += " boarderBottom";
            } 
            

            let td = document.createElement('td');
            td.innerHTML = '<input type="text" id="' + j + '' + i + '" class="boardEntryField' + classes + '" onchange="digitsOnly(this)" maxlength="1" required>';
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    tbl.appendChild(tbody);
    body.insertBefore(tbl, body.firstChild);
}

// Allows for numbers 1-9 only to be inputted into text fields
function digitsOnly(ele) {
    ele.value = ele.value.match("[1-9]");
};


// gets the values of the Sudoku board and returns them as a matrix.
// NaN values are set to -1.
function getBoard(x = 9, y = 9){
    let boardValues = [];
    for(let i = 0; i < y; i++){
        boardValues.push([]);
        for(let j = 0; j < x; j++){
            value = parseInt(document.getElementById("" + j + i).value);
            if (isNaN(value)){
                value = -1;
            }
            boardValues[i].push(value);
        }
    }
    return(boardValues);
}

// sets the boards display based on the matrix created by get board.
// values of -1 are set to ""
function setBoard(board){
    for(let i = 0; i < y; i++){
        for(let j = 0; j < x; j++){
            let value = board[i][j];
            if (value == -1){
                value = "";
            }
            document.getElementById("" + j + i).value = value;
        }
    }
}
