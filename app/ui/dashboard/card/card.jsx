"use client"
import styles from './card.module.css'
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className={styles.container}>
        <MdSupervisedUserCircle size={20}/>
        <div className={styles.texts}>
          <span className={styles.title}>Total Users</span>
          <span className={styles.number}>10.329</span>
          <span className={styles.detail}>
            <span className={styles.positive}>50% </span> 
            more than previous day
            </span>
          
        </div>
    </div>
  )
}


export default Card