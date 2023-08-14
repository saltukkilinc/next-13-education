import Link from 'next/link'
import React from 'react'
import styles from "./styles.module.css"

const Header = () => {
  return (
    <header className={styles.container}>
      <Link href="/">
        <span>BLOG</span>
      </Link>
      <nav>
        <Link href="https://www.google.com" target="_blank">
          About
        </Link>
      </nav>
    </header>
  )
}

export default Header
