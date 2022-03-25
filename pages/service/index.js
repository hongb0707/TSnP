import styles from '../../styles/pages/service.module.css';
import { motion } from 'framer-motion';

export default function Service () {
    // img motion
    const imgVariants = {
        initial : { transform: 'translateY(30%)' },
        whileInView : { transform: 'translateY(0%)' }
    }
    return (
        <article className={styles.article}>
            <section className={styles.section1}>
                <h1>블록 + 체인 = 블록체인</h1>
            </section>
            <section className={styles.section2}>
                <h1><span className={styles.orange}>오렌지</span>를 먹은지 얼마나 <span className={styles.orange}>오렌지</span></h1>
            </section>
            <section className={styles.section3}>
                <div>
                    <motion.img initial='initial' whileInView='whileInView' variants={imgVariants} />
                    <motion.img initial='initial' whileInView='whileInView' variants={imgVariants} />
                    <motion.img initial='initial' whileInView='whileInView' variants={imgVariants} />
                </ div>
            </section>
            <section className={styles.section4}>
                <h1>널 사랑할 <span className={styles.watermelon}>수박</span>에 없어</h1>
            </section>
        </article>
    );
}