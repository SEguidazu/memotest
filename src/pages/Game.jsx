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
      {characters.length <= 0 && (
        <>
          <img
            className={styles.logo}
            src="disney-logo.png"
            alt="Disney logo"
          />

          <h1 className={styles.title}>MEMOTEST</h1>
          <h3 className={styles.text}>
            Empecemos a descubrir algunas princesas de Disney!
          </h3>
        </>
      )}
      {characters.length > 0 && (
        <>
          <h2 className={styles.title}>MEMOTEST PRINCESAS</h2>
          <Board
            characters={characters}
            shuffleCharacters={shuffleCharacters}
          />
        </>
      )}
      {characters.length <= 0 && (
        <button className={styles.start} onClick={() => shuffleCharacters()}>
          Comenzar juego
        </button>
      )}
    </Layout>
  );
}

export default Game;
