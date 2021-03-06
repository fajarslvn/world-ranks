import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>World Ranks</title>
        <meta name="description" content="World Ranks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>main</main>

      <footer className={styles.footer}>footer</footer>
    </div>
  );
}
