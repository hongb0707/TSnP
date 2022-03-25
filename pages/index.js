import Link from 'next/link';
import { Icon } from 'semantic-ui-react';
import styles from '../styles/pages/home.module.css';

export default function Home() {
  return (
    <article className={styles.article}>
      <section className={styles.section1}>
        <h1>
          수수료 없는 이체<br></br>
          편리한 서비스
          <Link href="/service">알아보기</Link>
        </h1>
      </section>
      <section className={styles.section2}>
        <img /> 
      </section>
      <section className={styles.section3}>
        <h1>라떼는 말야 아이스 바닐라 라떼</h1>
        <h1>왕이 당황하면 우왕좌왕</h1>
      </section>
      <section className={styles.section4}>
        <div>
          <img />
          <img />
          <img />
          <img />
        </div>
      </section>
    </article>
  )
}
