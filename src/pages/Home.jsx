import Layout from "./Layout";
import styles from "../styles/common.module.css";

function Home() {
  return (
    <Layout>
      <img className={styles.logo} src="disney-logo.png" alt="Disney logo" />
      <h1 className={styles.title}>MEMOTEST</h1>
      <h3 className={styles.text}>
        Empecemos a descubrir algunas princesas de Disney!
      </h3>
      <a className={styles.link} href="/memotest/game">
        Jugar
      </a>
    </Layout>
  );
}

export default Home;
