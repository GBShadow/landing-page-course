import Link from 'next/link'

import styles from './styles.module.css'

export const TopBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <img src="logo.svg" alt="Logo Iron Hack" />
        </div>
        <div>
          <Link href="#">
            <a className={styles.link}>The Bootcamp</a>
          </Link>
          <Link href="#">
            <a className={styles.link}>Course Details</a>
          </Link>
          <Link href="#">
            <a className={styles.link}>Ironhackers</a>
          </Link>
          <Link href="#">
            <div className={styles.button}>
              <a>Apply Now</a>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
