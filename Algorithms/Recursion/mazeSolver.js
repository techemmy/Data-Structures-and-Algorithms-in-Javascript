/*
type Point = {x, y}

maze: string[]
wall: string
start: Point
end: Point
curr: Point
seen: Array[][]
path: Point[]
*/

const directions = [
    [0, 1], // up
    [1, 0], // right
    [0, -1], // down
    [-1, 0], // left
]

function solve(maze, wall, end, curr, seen, path) {
    // if out of bounds
    if (curr.x < 0 || curr.x >= maze[0].length ||
        curr.y < 0 || curr.y > maze.length) {
        return false
    }

    // if we hit a wall
    if (maze[curr.y][curr.x] === wall) {
        return false
    }

    // if we hit the end of the maze
    if (curr.x === end.x && curr.y === end.y) {
        path.push(curr);
        return true
    }

    //  if we traverse through the point before
    if (seen[curr.y][curr.x]) {
        return false
    }

    // pre recurse
    seen[curr.y][curr.x] = true;
    path.push(curr);

    // recurse
    for (let i = 0; i < directions.length; ++i) {

        if (solve(
            maze, wall, end,{
                x: curr.x + directions[i][0],
                y: curr.y + directions[i][1]
            }, seen, path
        )) {
            return true
        }
    }

    // post recurse
    path.pop(curr);

    return false;
}

function mazeSolver(maze, wall, start, end) {
    const seen = []
    const path = []

    for (let i of maze) {
        seen.push(new Array(maze[0].length).fill(false))
    }

    solve(maze, wall, end, start, seen, path)

    console.log("final path:");
    console.log(path);
}

// test case
const maze = [
    "xxxxxxxxxx x",
    "x        x x",
    "x        x x",
    "x xxxxxxxx x",
    "x          x",
    "x xxxxxxxxxx",
];
mazeSolver(maze, "x", { x: 10, y: 0 }, { x: 1, y: 5 })

// the logged final path must be equal to the one below
// [
//     { x: 10, y: 0 },
//     { x: 10, y: 1 },
//     { x: 10, y: 2 },
//     { x: 10, y: 3 },
//     { x: 10, y: 4 },
//     { x: 9, y: 4 },
//     { x: 8, y: 4 },
//     { x: 7, y: 4 },
//     { x: 6, y: 4 },
//     { x: 5, y: 4 },
//     { x: 4, y: 4 },
//     { x: 3, y: 4 },
//     { x: 2, y: 4 },
//     { x: 1, y: 4 },
//     { x: 1, y: 5 },
// ]