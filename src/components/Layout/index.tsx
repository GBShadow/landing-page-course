import { ReactElement } from 'react'
import styles from './styles.module.css'

type LayoutProps = {
  children: ReactElement
}

export const Layout = ({ children }: LayoutProps) => {
  return <div className={styles.container}>{children}</div>
}
