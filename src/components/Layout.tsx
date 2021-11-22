import { ReactElement } from 'react'

type LayoutProps = {
  children: ReactElement
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <img className="c-image-background" src="hexagon.svg" alt="background" />
      <div className="l-main">{children}</div>
    </>
  )
}
