import React from 'react'
import styles from './transactions.module.css'
import Image from 'next/image'

export default function Transactions() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transictions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <div className={styles.user}>
            <td>
              <Image src='/noavatar.png' alt='' width={40} height={40} className={styles.userImage}/>
             
            </td>
            Toni Dowe
            </div>

            <td><span className={`${styles.status} ${styles.pending}`}>Pending</span></td>
            <td>23.23</td>
            <td>500030$</td>
          </tr>
          <tr>
          <div className={styles.user}>
            <td>
              <Image src='/noavatar.png' alt='' width={40} height={40} className={styles.userImage}/>
              
            </td>
            Toni Dowe
            </div>
            <td><span className={`${styles.status} ${styles.done}`}>Done</span></td>
            <td>23.23</td>
            <td>500030$</td>
          </tr>
          <tr>
          <div className={styles.user}>
            <td>
              <Image src='/noavatar.png' alt='' width={40} height={40} className={styles.userImage}/>
             
            </td>
            Toni Dowe
            </div>
            <td><span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span></td>
            <td>23.23</td>
            <td>500030$</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
