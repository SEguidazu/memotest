import styles from "../styles/game.module.css";

function Card({ name, imagePath, flipped, isFound, handleClick }) {
  return (
    <button
      className={`
        ${styles.card}
        ${flipped ? styles.cardActive : ""}
        ${isFound ? styles.cardFound : ""}
      `}
      onClick={handleClick}
      disabled={flipped || isFound}
    >
      <img
        className={styles.characterImage}
        src={imagePath}
        alt={`${name} imagen`}
      />
    </button>
  );
}

export default Card;
