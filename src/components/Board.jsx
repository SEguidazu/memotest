import { useState, useEffect } from "react";
import Card from "./Card";
import styles from "../styles/game.module.css";

function Board({ characters, shuffleCharacters }) {
  const [flippedCards, setFlippedCards] = useState([]);
  const [foundCards, setFoundCards] = useState([]);

  const handleClickCard = (index) => {
    if (foundCards.includes(index)) {
      return;
    }

    if (flippedCards.length < 2) {
      setFlippedCards((flippedCards) => [...flippedCards, index]);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const firstCard = characters[flippedCards[0]];
      const secondCard = characters[flippedCards[1]];

      if (firstCard.id === secondCard.id) {
        setFoundCards((foundCards) => [
          ...foundCards,
          flippedCards[0],
          flippedCards[1],
        ]);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1400);
      }
    }
  }, [flippedCards]);

  return (
    <div className={styles.container}>
      <h3 className={styles.textCardsFound}>
        Princesas encontradas: {Math.round(foundCards.length / 2)} de{" "}
        {Math.round(characters.length / 2)}
      </h3>
      {characters.length ? (
        <div className={styles.cardsContainer}>
          {characters.map((princess, index) => (
            <Card
              key={index}
              name={princess.name}
              imagePath={princess.imagePath}
              flipped={flippedCards.includes(index)}
              isFound={foundCards.includes(index)}
              handleClick={() => handleClickCard(index)}
            />
          ))}
        </div>
      ) : (
        <button onClick={() => shuffleCharacters()}>Comenzar juego</button>
      )}
    </div>
  );
}

export default Board;
