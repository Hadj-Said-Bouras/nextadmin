import React from 'react'
import styles from './rightbar.module.css'
import Image from 'next/image'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

export default function Rightbar() {
  return (
    <div className={styles.container}>
          <div className={styles.item}>
            <div className={styles.bgcontainer}>
              <Image src='/astronaut.png' alt='' fill className={styles.bg}/>
            </div>
            <div className={styles.text}>
              <span className={styles.notification}>🔥 Available Now</span>
              <h3 className={styles.title}>How to make 1 billion with only half click</h3>
              <span className={styles.subtitle}>Takes 30 years to learn</span>
              <p className={styles.description}>
                Lorem ipsum, ipsum aliquam magni vero praesentium quos iusto aut.
              </p>
              <button className={styles.button}>
                <MdPlayCircleFilled />
                Watch
              </button>
            </div>
            
          </div>
          <div className={styles.item}>
            <div className={styles.bgcontainer}>
              <Image src='/astronaut.png' alt='' fill className={styles.bg}/>
            </div>
            <div className={styles.text}>
              <span className={styles.notification}>🔥 Available Now</span>
              <h3 className={styles.title}>How to make 1 billion with only half click</h3>
              <span className={styles.subtitle}>Takes 30 years to learn</span>
              <p className={styles.description}>
                Lorem ipsum, ipsum aliquam magni vero praesentium quos iusto aut.
              </p>
              <button className={styles.button}>
                <MdReadMore />
                Read More
              </button>
            </div>
          </div>
    </div>
  )
}
