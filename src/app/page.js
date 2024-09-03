import styles from "./page.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <Link style={{color:"blue"}} href="/teste">Ir para página Teste</Link>
    </main>
  );
}
