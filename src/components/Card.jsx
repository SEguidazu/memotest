import styles from "../styles/game.module.css";

function Card({ id, name, imagePath }) {
  return <button className={styles.card}>{name}</button>;
}

export default Card;
