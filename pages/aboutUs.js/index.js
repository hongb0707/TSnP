import styles from '../../styles/pages/aboutUs.module.css';

export default function AboutUs () {
    return (
        <article className={styles.article}>
            <section className={styles.section1}>
                    <h1>
                        <span className={styles.mango}>망고</span>가 얼<span className={styles.mango}>망고</span><br></br>
                        설탕이 놀라면 이럴슈가
                    </h1>
            </section>
            <section className={styles.section2}>
                <div className={styles.gridContainer}>
                    <img />
                    <img />
                    <img />
                    <img />
                </div>
            </section>
            <section className={styles.section3}>
                 <h1>
                    <span className={styles.mango}>망고</span>가 얼<span className={styles.mango}>망고</span><br></br>
                    설탕이 놀라면 이럴슈가
                </h1>
            </section>
            <section className={styles.section4}>
                <div className={styles.gridContainer}>
                    <div>
                        <img />
                        <div className={styles.textBox}></div>
                    </div>
                    <div>
                        <img />
                        <div className={styles.textBox}></div>
                    </div>
                    <div>
                        <img />
                        <div className={styles.textBox}></div>
                    </div>
                    <div>
                        <img />
                        <div className={styles.textBox}></div>
                    </div>
                    <div>
                        <img />
                        <div className={styles.textBox}></div>
                    </div>
                    <div>
                        <img />
                        <div className={styles.textBox}></div>
                    </div>
                    <div>
                        <img />
                        <div className={styles.textBox}></div>
                    </div>
                    <div>
                        <img />
                        <div className={styles.textBox}></div>
                    </div>
                </div>
            </section>
        </article>
    );
}