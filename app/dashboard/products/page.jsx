import React from 'react'
import styles from '../../ui/dashboard/products/products.module.css'
import Search from '../../ui/dashboard/search/search'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '../../ui/dashboard/pagination/pagination'

export default function UsersPage() {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
          <Search placeholder="Search for a product..." />
          <Link href='/dashboard/products/add' >
            <button className={styles.addButton}>New Product</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Tittle</td>
              <td>Description</td>
              <td>Price</td>
              <td>Created At</td>
              <td>Stock</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.product}>
                  <Image src='/noproduct.jpg' alt='' width={40} height={40} className={styles.productImage} />
                  5000 Gold
                </div>
              </td>
              <td>Desc</td>
              <td>$39398740134821340823</td>
              <td>2039.32.38</td>
              <td>1000</td>
              <td>
                <div className={styles.buttons}>

                <Link href='/dashboard/products/test'>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
    </div>
  )
}
