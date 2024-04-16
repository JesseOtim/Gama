// // const canvas = document.getElementById("gameCanvas");
// // const ctx = canvas.getContext("2d");

// // const snakeSize = 20;
// // const gridSize = canvas.width / snakeSize;

// // let snake = [];
// // snake[0] = { x: 10 * snakeSize, y: 10 * snakeSize };

// // let food = { x: Math.floor(Math.random() * gridSize) * snakeSize, y: Math.floor(Math.random() * gridSize) * snakeSize };

// // let dx = 0;
// // let dy = 0;

// // function drawSnake() {
// //     snake.forEach((segment, index) => {
// //         ctx.fillStyle = (index === 0) ? "green" : "lightgreen";
// //         ctx.fillRect(segment.x, segment.y, snakeSize, snakeSize);
// //     });
// // }

// // function drawFood() {
// //     ctx.fillStyle = "red";
// //     ctx.fillRect(food.x, food.y, snakeSize, snakeSize);
// // }

// // function moveSnake() {
// //     const head = { x: snake[0].x + dx, y: snake[0].y + dy };
// //     snake.unshift(head);

// //     if (head.x === food.x && head.y === food.y) {
// //         food = { x: Math.floor(Math.random() * gridSize) * snakeSize, y: Math.floor(Math.random() * gridSize) * snakeSize };
// //     } else {
// //         snake.pop();
// //     }
// // }

// // function checkCollision() {
// //     if (
// //         snake[0].x < 0 || 
// //         snake[0].x >= canvas.width || 
// //         snake[0].y < 0 || 
// //         snake[0].y >= canvas.height ||
// //         snake.slice(1).some(segment => segment.x === snake[0].x && segment.y === snake[0].y)
// //     ) {
// //         clearInterval(gameLoop);
// //         alert("Game Over!");
// //     }
// // }

// // function gameLoop() {
// //     ctx.clearRect(0, 0, canvas.width, canvas.height);
// //     drawFood();
// //     drawSnake();
// //     moveSnake();
// //     checkCollision();
// // }

// // document.addEventListener("keydown", event => {
// //     const keyPressed = event.key;
// //     if (keyPressed === "ArrowUp" && dy === 0) {
// //         dy = -snakeSize;
// //         dx = 0;
// //     } else if (keyPressed === "ArrowDown" && dy === 0) {
// //         dy = snakeSize;
// //         dx = 0;
// //     } else if (keyPressed === "ArrowLeft" && dx === 0) {
// //         dx = -snakeSize;
// //         dy = 0;
// //     } else if (keyPressed === "ArrowRight" && dx === 0) {
// //         dx = snakeSize;
// //         dy = 0;
// //     }
// // });

// // let gameLoopInterval = setInterval(gameLoop, 100);

// const canvas = document.getElementById("gameCanvas");
// const ctx = canvas.getContext("2d");

// const snakeSize = 20;
// const gridSize = canvas.width / snakeSize;

// let snake = [];
// snake[0] = { x: 10 * snakeSize, y: 10 * snakeSize };

// let food = { x: Math.floor(Math.random() * gridSize) * snakeSize, y: Math.floor(Math.random() * gridSize) * snakeSize };

// let dx = 0;
// let dy = 0;

// function drawSnake() {
//     snake.forEach((segment, index) => {
//         ctx.fillStyle = (index === 0) ? "green" : "lightgreen";
//         ctx.fillRect(segment.x, segment.y, snakeSize, snakeSize);
//     });
// }

// function drawFood() {
//     ctx.fillStyle = "red";
//     ctx.fillRect(food.x, food.y, snakeSize, snakeSize);
// }

// function moveSnake() {
//     const head = { x: snake[0].x + dx, y: snake[0].y + dy };
//     snake.unshift(head);

//     if (head.x === food.x && head.y === food.y) {
//         food = { x: Math.floor(Math.random() * gridSize) * snakeSize, y: Math.floor(Math.random() * gridSize) * snakeSize };
//     } else {
//         snake.pop();
//     }
// }

// function checkCollision() {
//     if (
//         snake[0].x < 0 || 
//         snake[0].x >= canvas.width || 
//         snake[0].y < 0 || 
//         snake[0].y >= canvas.height ||
//         snake.slice(1).some(segment => segment.x === snake[0].x && segment.y === snake[0].y)
//     ) {
//         clearInterval(gameLoopInterval);
//         alert("Game Over!");
//     }
// }

// function gameLoop() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawFood();
//     drawSnake();
//     moveSnake();
//     checkCollision();
// }

// // document.addEventListener("keydown", event => {
// //     const keyPressed = event.key;
// //     if (keyPressed === "ArrowUp" && dy === 0) {
// //         dy = -snakeSize;
// //         dx = 0;
// //     } else if (keyPressed === "ArrowDown" && dy === 0) {
// //         dy = snakeSize;
// //         dx = 0;
// //     } else if (keyPressed === "ArrowLeft" && dx === 0) {
// //         dx = -snakeSize;
// //         dy = 0;
// //     } else if (keyPressed === "ArrowRight" && dx === 0) {
// //         dx = snakeSize;
// //         dy = 0;
// //     }
// // });
// document.addEventListener("keydown", event => {
//     const keyPressed = event.key;
//     if (keyPressed === "ArrowUp" && dy === 0) {
//         dy = -snakeSize;
//         dx = 0;
//     } else if (keyPressed === "ArrowDown" && dy === 0) {
//         dy = snakeSize;
//         dx = 0;
//     } else if (keyPressed === "ArrowLeft" && dx === 0) {
//         dx = -snakeSize;
//         dy = 0;
//     } else if (keyPressed === "ArrowRight" && dx === 0) {
//         dx = snakeSize;
//         dy = 0;
//     }
// });


// let gameLoopInterval = setInterval(gameLoop, 100);

// // Button event listener
// const moveButton = document.getElementById("moveButton");
// moveButton.addEventListener("click", () => {
//     // Example: Move snake to the right when button clicked
//     dx = snakeSize;
//     dy = 0;
// });
// // Add event listeners to arrow buttons for small screens
// const upButton = document.getElementById("upButton");
// const downButton = document.getElementById("downButton");
// const leftButton = document.getElementById("leftButton");
// const rightButton = document.getElementById("rightButton");

// upButton.addEventListener("click", () => moveSnake("up"));
// downButton.addEventListener("click", () => moveSnake("down"));
// leftButton.addEventListener("click", () => moveSnake("left"));
// rightButton.addEventListener("click", () => moveSnake("right"));

// // Function to handle snake movement based on direction
// function moveSnake(direction) {
//     if (direction === "up" && dy === 0) {
//         dy = -snakeSize;
//         dx = 0;
//     } else if (direction === "down" && dy === 0) {
//         dy = snakeSize;
//         dx = 0;
//     } else if (direction === "left" && dx === 0) {
//         dx = -snakeSize;
//         dy = 0;
//     } else if (direction === "right" && dx === 0) {
//         dx = snakeSize;
//         dy = 0;
//     }
// }
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const snakeSize = 20;
const gridSize = canvas.width / snakeSize;

let snake = [];
snake[0] = { x: 10 * snakeSize, y: 10 * snakeSize };

let food = { x: Math.floor(Math.random() * gridSize) * snakeSize, y: Math.floor(Math.random() * gridSize) * snakeSize };

let dx = 0;
let dy = 0;

function drawSnake() {
    snake.forEach((segment, index) => {
        ctx.fillStyle = (index === 0) ? "green" : "lightgreen";
        ctx.fillRect(segment.x, segment.y, snakeSize, snakeSize);
    });
}

function drawFood() {
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, snakeSize, snakeSize);
}

function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        food = { x: Math.floor(Math.random() * gridSize) * snakeSize, y: Math.floor(Math.random() * gridSize) * snakeSize };
    } else {
        snake.pop();
    }
}

function checkCollision() {
    if (
        snake[0].x < 0 || 
        snake[0].x >= canvas.width || 
        snake[0].y < 0 || 
        snake[0].y >= canvas.height ||
        snake.slice(1).some(segment => segment.x === snake[0].x && segment.y === snake[0].y)
    ) {
        clearInterval(gameLoopInterval);
        alert("Game Over!");
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFood();
    drawSnake();
    moveSnake();
    checkCollision();
}

document.addEventListener("keydown", event => {
    const keyPressed = event.key;
    if (keyPressed === "ArrowUp" && dy === 0) {
        dy = -snakeSize;
        dx = 0;
    } else if (keyPressed === "ArrowDown" && dy === 0) {
        dy = snakeSize;
        dx = 0;
    } else if (keyPressed === "ArrowLeft" && dx === 0) {
        dx = -snakeSize;
        dy = 0;
    } else if (keyPressed === "ArrowRight" && dx === 0) {
        dx = snakeSize;
        dy = 0;
    }
});

let gameLoopInterval = setInterval(gameLoop, 100);
