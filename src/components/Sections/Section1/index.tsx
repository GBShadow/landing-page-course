import { AboutCourse } from 'components/AboutCourse'
import styles from './styles.module.css'

export const Section1 = () => {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <AboutCourse />
      </div>
      <div className={styles.right}></div>
    </section>
  )
}
