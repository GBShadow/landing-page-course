import styles from './styles.module.css'
import Link from 'next/link'

export const AboutCourse = () => {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1>
          Join our <span className={styles.blue}>Web Development</span> course
        </h1>

        <p>
          Learn the skills needed to become a Full Stack Developer, create your
          own web applications from zero and get support for your future career
          in Tech
        </p>

        <Link href="/">
          <a> Book your space{'--->'} </a>
        </Link>
      </header>
      <div className={styles.content}>
        <h2>
          What makes <span className={styles.blue}>Ironhack different</span>
        </h2>

        <div className={styles.differentials}>
          <div className={styles.title}>
            <img src="icons/Learn_by_doing.svg" alt="Learn by doing" />
            <h3>“Learning by doing” methodology</h3>
          </div>
          <p>
            Students graduate with over 400 hours of hands-on learning
            experience, 3 web products built from scratch and a project
            portfolio which will be useful when looking for a job.
          </p>
        </div>

        <div className={styles.differentials}>
          <div className={styles.title}>
            <img src="icons/Career_Success.svg" alt="Learn by doing" />
            <h3>A career in Web Development</h3>
          </div>
          <p>
            Ironhackers land jobs as Front or Back-End Developers, Product
            Managers or Full-Stack Developers. Our career coaches support puts
            students in contact with a network of more than 600+ hiring
            partners.
          </p>
        </div>

        <div className={styles.differentials}>
          <div className={styles.title}>
            <img src="icons/Community.svg" alt="Learn by doing" />
            <h3>A community that invests in you</h3>
          </div>
          <p>
            Surrounded by teachers, classmates and alumni, there is always
            someone around to help and push you to succeed. Get lifetime access
            to our global slack community, student platform and events.
          </p>
        </div>

        <div className={styles.differentials}>
          <div className={styles.title}>
            <img src="icons/Financial.svg" alt="Learn by doing" />
            <h3>Financial solutions to fund your training</h3>
          </div>
          <p>
            We’ve gathered a wide range of financial solutions that adapt to
            your circumstances – Flexible payments, exclusive loans with
            partners or pay-for-success models.
          </p>
        </div>
      </div>
    </article>
  )
}
