const grid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 5, 0, 5, 5, 5, 0, 5, 0, 5, 0, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

function checkRowForObstacle(row) {
    for (let i = 0; i < grid[row].length; i++) {
        if (grid[row][i] === 5) return true
    }
    return false;
}

function checkColForObstacle(col) {
    for (let i = 0; i < grid[col].length; i++) {
        if (grid[i][col] === 5) return true
    }
    return false;
}

/*
0: squareField is empty
4: squareField ist a wooden box
5: squareField is a stone box
*/