import React, { useState, useEffect } from "react";

const cardSymbols = ["🍎", "🍌", "🍇", "🍉", "🍒", "🍍", "🥝", "🍑"];

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);

  const initializeGame = () => {
    const newCards = shuffleArray([...cardSymbols, ...cardSymbols]).map(
      (symbol, index) => ({
        id: index,
        symbol,
      })
    );
    setCards(newCards);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const handleFlip = (id) => {
    if (flipped.length === 2 || flipped.includes(id) || matched.includes(id)) {
      return;
    }

    setFlipped((prev) => [...prev, id]);

    if (flipped.length === 1) {
      setMoves((m) => m + 1);
      const firstId = flipped[0];
      const secondId = id;

      if (cards[firstId].symbol === cards[secondId].symbol) {
        setMatched((prev) => [...prev, firstId, secondId]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <div className="memory-game-container">
      <h1>🃏 Memory Card Game</h1>
      <p className="moves">Moves: {moves}</p>

      <div className="card-grid">
        {cards.map((card) => {
          const isFlipped =
            flipped.includes(card.id) || matched.includes(card.id);
          return (
            <div
              key={card.id}
              onClick={() => handleFlip(card.id)}
              className={`card ${isFlipped ? "flipped" : ""}`}
            >
              <span className="symbol">{card.symbol}</span>
            </div>
          );
        })}
      </div>

      {/* ✅ Restart bina refresh ke */}
      <button onClick={initializeGame} className="restart-btn">
        Restart
      </button>
    </div>
  );
}
