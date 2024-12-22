"use strict";
var TicTacToe = /** @class */ (function () {
    function TicTacToe() {
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.currentPlayer = 'X';
        this.renderBoard();
    }
    TicTacToe.prototype.renderBoard = function () {
        var _this = this;
        var boardElement = document.getElementById('board');
        if (!boardElement) {
            console.error('Board element not found');
            return;
        }
        boardElement.innerHTML = '';
        var _loop_1 = function (row) {
            var rowElement = document.createElement('div');
            rowElement.className = 'row';
            var _loop_2 = function (col) {
                var cellElement = document.createElement('div');
                cellElement.className = 'cell';
                cellElement.textContent = this_1.board[row][col] || '';
                cellElement.addEventListener('click', function () { return _this.makeMove(row, col); });
                rowElement.appendChild(cellElement);
            };
            for (var col = 0; col < 3; col++) {
                _loop_2(col);
            }
            boardElement.appendChild(rowElement);
        };
        var this_1 = this;
        for (var row = 0; row < 3; row++) {
            _loop_1(row);
        }
    };
    TicTacToe.prototype.makeMove = function (row, col) {
        if (this.board[row][col] !== null) {
            alert('Cell already occupied!');
            return false;
        }
        this.board[row][col] = this.currentPlayer;
        if (this.checkWin()) {
            alert("Player ".concat(this.currentPlayer, " wins!"));
            this.resetBoard();
            return true;
        }
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.renderBoard();
        return true;
    };
    TicTacToe.prototype.checkWin = function () {
        var lines = [
            // Rows
            [this.board[0][0], this.board[0][1], this.board[0][2]],
            [this.board[1][0], this.board[1][1], this.board[1][2]],
            [this.board[2][0], this.board[2][1], this.board[2][2]],
            // Columns
            [this.board[0][0], this.board[1][0], this.board[2][0]],
            [this.board[0][1], this.board[1][1], this.board[2][1]],
            [this.board[0][2], this.board[1][2], this.board[2][2]],
            // Diagonals
            [this.board[0][0], this.board[1][1], this.board[2][2]],
            [this.board[2][0], this.board[1][1], this.board[0][2]]
        ];
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            if (line[0] !== null && line[0] === line[1] && line[1] === line[2]) {
                return true;
            }
        }
        return false;
    };
    TicTacToe.prototype.resetBoard = function () {
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.currentPlayer = 'X';
        this.renderBoard();
    };
    return TicTacToe;
}());
// Initialize the game
document.addEventListener('DOMContentLoaded', function () {
    new TicTacToe();
});
