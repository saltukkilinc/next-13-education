import Link from 'next/link'
import React from 'react';

import styles from './styles.module.css'



const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h2>The Post is not found</h2>
      <p>You can try to go back Home page and try again</p>
      <Link href='/'>Home Page</Link>
    </div>
  )
}

export default NotFound