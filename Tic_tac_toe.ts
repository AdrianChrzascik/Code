type Player = 'X' | 'O' | null;

class TicTacToe {
    board: Player[][];
    currentPlayer: Player;

    constructor() {
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.currentPlayer = 'X';
        this.renderBoard();
    }

    renderBoard() {
        const boardElement = document.getElementById('board');
        if (!boardElement) {
            console.error('Board element not found');
            return;
        }
        boardElement.innerHTML = '';
        for (let row = 0; row < 3; row++) {
            const rowElement = document.createElement('div');
            rowElement.className = 'row';
            for (let col = 0; col < 3; col++) {
                const cellElement = document.createElement('div');
                cellElement.className = 'cell';
                cellElement.textContent = this.board[row][col] || '';
                cellElement.addEventListener('click', () => this.makeMove(row, col));
                rowElement.appendChild(cellElement);
            }
            boardElement.appendChild(rowElement);
        }
    }

    makeMove(row: number, col: number): boolean {
        if (this.board[row][col] !== null) {
            alert('Cell already occupied!');
            return false;
        }
        this.board[row][col] = this.currentPlayer;
        if (this.checkWin()) {
            alert(`Player ${this.currentPlayer} wins!`);
            this.resetBoard();
            return true;
        }
        if (this.checkDraw()) {
            alert('It\'s a draw!');
            this.resetBoard();
            return true;
        }
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        this.renderBoard();
        return true;
    }

    checkWin(): boolean {
        const lines = [
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

        for (let line of lines) {
            if (line[0] !== null && line[0] === line[1] && line[1] === line[2]) {
                return true;
            }
        }
        return false;
    }

    checkDraw(): boolean {
        for (let row of this.board) {
            for (let cell of row) {
                if (cell === null) {
                    return false;
                }
            }
        }
        return true;
    }

    resetBoard() {
        this.board = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.currentPlayer = 'X';
        this.renderBoard();
    }
}

// Initialize the game
document.addEventListener('DOMContentLoaded', () => {
    new TicTacToe();
});