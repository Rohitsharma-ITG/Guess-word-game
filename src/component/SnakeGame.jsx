import React, { useState, useEffect, useRef } from "react";

const CELL_SIZE = 20;
const WIDTH = 400;
const HEIGHT = 400;

const getRandomFood = () => {
    const x = Math.floor((Math.random() * WIDTH) / CELL_SIZE);
    const y = Math.floor((Math.random() * HEIGHT) / CELL_SIZE);
    return [x, y];
};

export default function SnakeGame() {
    const [snake, setSnake] = useState([[5, 5]]);
    const [food, setFood] = useState(getRandomFood);
    const [direction, setDirection] = useState("RIGHT");
    const [speed, setSpeed] = useState(150);
    const [gameOver, setGameOver] = useState(false);
    const [score, setScore] = useState(0);

    const moveRef = useRef();
    moveRef.current = direction;

    // Handle key presses
    useEffect(() => {
        const handleKeyDown = (e) => {
            switch (e.key) {
                case "ArrowUp":
                case "w":
                    if (direction !== "DOWN") setDirection("UP");
                    break;
                case "ArrowDown":
                case "s":
                    if (direction !== "UP") setDirection("DOWN");
                    break;
                case "ArrowLeft":
                case "a":
                    if (direction !== "RIGHT") setDirection("LEFT");
                    break;
                case "ArrowRight":
                case "d":
                    if (direction !== "LEFT") setDirection("RIGHT");
                    break;
                default:
                    break;
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [direction]);

    // Main game loop
    useEffect(() => {
        if (gameOver) return;

        const moveSnake = () => {
            setSnake((prevSnake) => {
                const newSnake = [...prevSnake];
                const head = [...newSnake[newSnake.length - 1]];

                switch (moveRef.current) {
                    case "UP":
                        head[1] -= 1;
                        break;
                    case "DOWN":
                        head[1] += 1;
                        break;
                    case "LEFT":
                        head[0] -= 1;
                        break;
                    case "RIGHT":
                        head[0] += 1;
                        break;
                    default:
                        break;
                }

                // Collision with walls
                if (
                    head[0] < 0 ||
                    head[1] < 0 ||
                    head[0] >= WIDTH / CELL_SIZE ||
                    head[1] >= HEIGHT / CELL_SIZE
                ) {
                    setGameOver(true);
                    return prevSnake;
                }

                // Collision with itself
                for (let cell of newSnake) {
                    if (cell[0] === head[0] && cell[1] === head[1]) {
                        setGameOver(true);
                        return prevSnake;
                    }
                }

                newSnake.push(head);

                // Eating food
                if (head[0] === food[0] && head[1] === food[1]) {
                    setFood(getRandomFood());
                    setSpeed((prev) => Math.max(50, prev - 5));
                    setScore((prev) => prev + 10);
                } else {
                    newSnake.shift();
                }

                return newSnake;
            });
        };

        const interval = setInterval(moveSnake, speed);
        return () => clearInterval(interval);
    }, [food, speed, gameOver]);

    const restartGame = () => {
        setSnake([[5, 5]]);
        setFood(getRandomFood());
        setDirection("RIGHT");
        setSpeed(150);
        setGameOver(false);
        setScore(0);
    };

    return (
        <div className="game-container">
            <h1 className="game-title">🐍 Snake Game</h1>
            <div className="score">Score: {score}</div>

            <div className="game-board">
                {/* Snake */}
                {snake.map(([x, y], idx) => (
                    <div
                        key={idx}
                        className="snake-cell"
                        style={{
                            left: x * CELL_SIZE,
                            top: y * CELL_SIZE,
                            width: CELL_SIZE,
                            height: CELL_SIZE,
                        }}
                    ></div>
                ))}

                {/* Food */}
                <div
                    className="food"
                    style={{
                        left: food[0] * CELL_SIZE,
                        top: food[1] * CELL_SIZE,
                        width: CELL_SIZE,
                        height: CELL_SIZE,
                    }}
                ></div>

                {/* Game Over Overlay */}
                {gameOver && (
                    <div className="game-over">
                        <p>Game Over 😢</p>
                        <button className="restart-btn" onClick={restartGame}>
                            Restart
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
