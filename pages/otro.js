import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Otro() {
  return (
    <div className={styles.container}>
    <Head>
      <title>Soy una serpiete que anda por el bosque</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
      Soy una serpiete que anda por el bosque de <Link href="/">Next.js!</Link>
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.js</code>
      </p>
    </main>
  </div>
  )
}
