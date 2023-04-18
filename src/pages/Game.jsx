import { princessList } from "../data/princess";
import Layout from "./Layout";
import Card from "../components/Card";
import commonStyles from "../styles/common.module.css";
import styles from "../styles/game.module.css";

function Game() {
  return (
    <Layout>
      <h2 className={commonStyles.title}>MEMOTEST PRINCESAS</h2>
      <div className={styles.cardsContainer}>
        {princessList?.map((princess) => (
          <Card key={princess.id} {...princess} />
        ))}
        {princessList?.map((princess) => (
          <Card key={princess.id} {...princess} />
        ))}
      </div>
      <a className={commonStyles.linkSmall} href="/">
        volver al inicio
      </a>
    </Layout>
  );
}

export default Game;
