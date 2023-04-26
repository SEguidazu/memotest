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
      <Board characters={characters} shuffleCharacters={shuffleCharacters} />
      <a className={styles.linkSmall} href="/">
        volver al inicio
      </a>
    </Layout>
  );
}

export default Game;
