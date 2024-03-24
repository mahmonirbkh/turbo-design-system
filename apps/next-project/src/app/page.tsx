'use client';
import styles from "./page.module.css";
import { Button } from '@acme/ui/Button';

export default function Home() {
  function onClick() {
    console.log("next project");
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <Button onClick={onClick}>next project</Button>
      </div>
    </main>
  );
}
