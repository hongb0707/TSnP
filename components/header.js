import Link from 'next/link';
import styles from '../styles/components/header.module.css';

export default function Header () {
    return(
        <header className={styles.header}>
            <Link href="/"><img className={styles.logo} /></Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/aboutUs">회사 소개</Link>
                    </li>
                    <li>
                        <Link href="/service">서비스 안내</Link>
                    </li>
                    {/* <li>
                        <Link href="/">마이 페이지</Link>
                    </li> */}
                </ul>
            </nav>
            <button className={styles.launchButton}>
                Launch App
            </button>
        </header>
    );
}