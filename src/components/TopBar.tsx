import Link from 'next/link'

export const TopBar = () => {
  return (
    <header className="l-header">
      <section className="l-header__message">
        <p className="l-header__message-text">
          Learn in campus or remotely while feeling supported by the Ironhack
          community.
        </p>
      </section>
      <main className="l-header__content">
        <img className="l-header__logo" src="logo.svg" alt="Logo Iron Hack" />

        <nav>
          <Link href="#">
            <a className="l-header__link">The Bootcamp</a>
          </Link>
          <Link href="#">
            <a className="l-header__link">Course Details</a>
          </Link>
          <Link href="#">
            <a className="l-header__link">Ironhackers</a>
          </Link>
          <Link href="#">
            <div className="l-header__button">
              <a className="l-header__button-link">Apply Now</a>
            </div>
          </Link>
        </nav>
      </main>
    </header>
  )
}
