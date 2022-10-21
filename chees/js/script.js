const FIGURESYMBOL = {
    king: {
        white: "&#9812;",
        black: "&#9818;"
    },
    queen: {
        white: "&#9813;",
        black: "&#9819;"
    },
    pawn: {
        white: "&#9817;",
        black: "&#9823;"
    },
    rock: {
        white: "&#981",
        black: "&#9820"
    },
    knight: {
        white: "&#9816",
        black: "&#9822;"
    }
};

let arr, table;

let figureset = [];
let startpos =[
    ['king', 'white', 'e1'],
    ['queen', 'white', 'd1'],
    ['pawn', 'white', 'c2'],
    ['rock', 'black', 'a8'],
    ['knight', 'black', 'g8'],
];

document.addEventListener('DOMContentLoaded', function() {
    arr = document.querySelectorAll('td');
    for(const cell of arr) {
//        cell.addEventListener('click', e => console.log(getCellPosition(e.target)));
        cell.addEventListener('click', e => useCell(getCellPosition(e.target)));
    }
//    document.querySelector('table').addEventListener('click', (e) => console.log(getCellFromClick(e)));

    startpos.forEach(item => {
        figure = new ChessFigure(...item);
        figure.render();
        figureset.push(figure)
    });

//    figureset.push(new ChessFigure('king', 'white', 'e1'));
});
function getCellPosition(cell) {
    let idx = [].indexOf.call(arr, cell);
    let vert = 8 - Math.floor(idx / 8);
    let hor = 'abcdefgh'[idx % 8];
    
    return hor + vert;
}
function getCellFromPosition(position) {    
    for(const cell of arr){
        if (getCellPosition(cell) == position) return cell;
    }
    throw "Несуществующие координаты " + cell;
}
function useCell(cell) {
    if (!document.querySelector('.cellfrom') || document.querySelector('.cellto')) {
        document.querySelector('.cellfrom').classList.remove('cellfrom');
        document.querySelector('.cellto').classList.remove('cellto');
        cell.classList.add('cellfrom');

        let pos = getCellPosition(cell);

        console.log(pos);
        for(let f of figureset) {
            if (f.position == pos) {
                console.log(f);
                break;
            }
        }

    } else {

    }
    call.classList.contains('cellfrom');
}
class ChessFigure {
    constructor(name, color, position) {
        this.name = name;
        this.color = color;
        this.position = position;
    }
    render() {
        getCellFromPosition(this.position).innerHTML = FIGURESYMBOL[this.name][this.color];
    }
    clear = function() {
        getCellFromPosition(this.position).innerHTML = '';
    }
}