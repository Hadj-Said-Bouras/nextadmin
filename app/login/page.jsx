import React from 'react'
import styles from '../ui/login/login.module.css'

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h1>Login</h1>
        {/* <label>Email</label> */}
        <input type="text" placeholder='username' required />
        {/* <label>Password</label> */}
        <input type="password" placeholder='*****' required />
        <button>Login</button>
      </form>
    </div>
  )
}
