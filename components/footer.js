import Link from 'next/link';
import styles from '../styles/components/footer.module.css';

export default function Footer () {
    return (
        <footer className={styles.footer}>
            <section>
                <img className={styles.logo} />
            </section>
            <section>
                <ul className={styles.links}>
                    <li>
                        <Link href="/">공지사항</Link>
                    </li>
                    <li>
                        <Link href="/">자주하는 질문</Link>
                    </li>
                    <li>
                        <Link href="/s">1:1 문의하기</Link>
                    </li>
                </ul>
                <div className={styles.textBox1}>

                </div>
                <div className={styles.textBox2}>

                </div>
            </section>
            <section>
                <div className={styles.textBox3}>

                </div>
                <div className={styles.textBox4}>

                </div>
            </section>
        </footer>
    );
}