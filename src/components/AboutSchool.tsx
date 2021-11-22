import Link from 'next/link'

export const AboutSchool = () => {
  return (
    <article className="l-about-school">
      <header className="l-about-school__header">
        <h1 className="l-about-school__header__title">
          Join our <span className="u-color-blue">Web Development</span> course
        </h1>

        <p className="l-about-school__header__text">
          Learn the skills needed to become a Full Stack Developer, create your
          own web applications from zero and get support for your future career
          in Tech
        </p>

        <Link href="/">
          <a className="l-about-school__link">Book your space{'--->'}</a>
        </Link>
      </header>
      <div className="l-about-school__content">
        <h2 className="l-about-school__content__title">
          What makes <span className="u-color-blue">Ironhack different</span>
        </h2>

        <div className="c-differentials">
          <div className="c-differentials__header">
            <img
              className="c-differentials__icon"
              src="icons/Learn_by_doing.svg"
              alt="Learn by doing"
            />
            <strong className="c-differentials__title">
              “Learning by doing” methodology
            </strong>
          </div>
          <p>
            Students graduate with over 400 hours of hands-on learning
            experience, 3 web products built from scratch and a project
            portfolio which will be useful when looking for a job.
          </p>
        </div>

        <div className="c-differentials">
          <div className="c-differentials__header">
            <img
              className="c-differentials__icon"
              src="icons/Career_Success.svg"
              alt="Learn by doing"
            />
            <strong className="c-differentials__title">
              A career in Web Development
            </strong>
          </div>
          <p className="c-differentials__text">
            Ironhackers land jobs as Front or Back-End Developers, Product
            Managers or Full-Stack Developers. Our career coaches support puts
            students in contact with a network of more than 600+ hiring
            partners.
          </p>
        </div>

        <div className="c-differentials">
          <div className="c-differentials__header">
            <img
              className="c-differentials__icon"
              src="icons/Community.svg"
              alt="Learn by doing"
            />
            <strong className="c-differentials__title">
              A community that invests in you
            </strong>
          </div>
          <p className="c-differentials__text">
            Surrounded by teachers, classmates and alumni, there is always
            someone around to help and push you to succeed. Get lifetime access
            to our global slack community, student platform and events.
          </p>
        </div>

        <div className="c-differentials">
          <div className="c-differentials__header">
            <img
              className="c-differentials__icon"
              src="icons/Financial.svg"
              alt="Learn by doing"
            />
            <strong className="c-differentials__title">
              Financial solutions to fund your training
            </strong>
          </div>
          <p className="c-differentials__text">
            We’ve gathered a wide range of financial solutions that adapt to
            your circumstances – Flexible payments, exclusive loans with
            partners or pay-for-success models.
          </p>
        </div>
      </div>
    </article>
  )
}
