/**
 * Imagine a robot sitting on the upper left corner
 * of grid with r rows and c columns. The robot can only
 * move in two directions, right or down, but certain cells
 * are "off limits" such that the robot cannot step on them.
 * Design an algorithm to find a path for the robot from the
 * top left to the bottom right.
 * @todo DEBUG!!!!
 * @author Ashaun Thomas
 */

 let maze = 
    [
       ['R', ' ', ' ', ' ', ' '],   // R = Robot
       [' ', ' ', 'X', ' ', ' '],   // X = Off Limit Space
       [' ', 'X', ' ', ' ', ' '],   // G = Goal
       [' ', ' ', ' ', 'X', ' '],
       [' ', 'X', ' ', ' ', 'G']
    ];
 
 let failedPoints = new Set();



function getPath(maze) {
    if (maze == null || maze.length == 0) {
        return null;
    }
    let path = [];
    let lastRow = maze.length - 1;
    let lastCol = maze[0].length - 1;
    if (pathFinder(lastRow,lastCol,path)) {
        return path;
    }
}

function pathFinder(row, col, path) {
    if (col < 0 || row < 0 || maze[row][col] == 'X') {
        return false;
    }

    let currentPoint = [row, col];
    let isAtOrigin = maze[row,col] === 'R';


    if (failedPoints.has(currentPoint)) {
        return false; // already visited this point
    }

    
    if (
        isAtOrigin ||
        pathFinder(row, --col, path) ||
        pathFinder(--row, col, path)
    ) {
        path.add(currentPoint);
        return true;
    }

    failedPoints.add(currentPoint);
    return false;
}

console.log(getPath(maze));