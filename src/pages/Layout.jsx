import styles from "../styles/layout.module.css";

function Layout({ children }) {
  return <div className={styles.appContainer}>{children}</div>;
}

export default Layout;
