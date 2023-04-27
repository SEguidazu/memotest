import { useState } from "react";
import { princessList } from "../data/princess";
import { shuffle } from "../utils";
import Layout from "./Layout";
import Board from "../components/Board";
import styles from "../styles/common.module.css";

function Game() {
  const [characters, setCharacters] = useState([]);

  const shuffleCharacters = () => {
    setCharacters([...shuffle(princessList), ...shuffle(princessList)]);
  };

  return (
    <Layout>
      <h2 className={styles.title}>MEMOTEST PRINCESAS</h2>
      {characters.length > 0 && (
        <Board characters={characters} shuffleCharacters={shuffleCharacters} />
      )}
      {characters.length <= 0 && (
        <button className={styles.start} onClick={() => shuffleCharacters()}>
          Comenzar juego
        </button>
      )}
      <a className={styles.linkSticky} href="/">
        volver al inicio
      </a>
    </Layout>
  );
}

export default Game;
