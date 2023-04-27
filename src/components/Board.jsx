import { useState, useEffect } from "react";
import Card from "./Card";
import styles from "../styles/game.module.css";
import commonStyles from "../styles/common.module.css";

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

  const isGameOver = () =>
    Math.round(foundCards.length / 2) === Math.round(characters.length / 2);

  const restartGame = () => {
    shuffleCharacters();
    setFlippedCards([]);
    setFoundCards([]);
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
      <span className={styles.textCardsFound}>
        {Math.round(foundCards.length / 2)} de{" "}
        {Math.round(characters.length / 2)}
      </span>
      {characters.length > 0 && (
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
      )}
      {isGameOver() && (
        <div className={commonStyles.modalContainer}>
          <div className={styles.gameOverContainer}>
            <h3>
              GANASTE! <br /> QUERES JUGAR DE NUEVO?
            </h3>
            <button
              className={commonStyles.start}
              onClick={() => restartGame()}
            >
              VOLVER A MEZCLAR
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Board;
