import React from 'react'
import styles from './pagination.module.css'

export default function Pagination() {
  return (
    <div className={styles.container}>
        <button className={styles.prev}>Previous</button>
        <button className={styles.next}>Next</button>
    </div>
  )
}
