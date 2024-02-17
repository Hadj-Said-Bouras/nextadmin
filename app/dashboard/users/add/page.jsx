import React from 'react'
import styles from '../../../ui/dashboard/users/addUser/addUser.module.css'
import addProduct from '../../../lib/actions'


export default function AddUserPage() {
  return (
    <div className={styles.container}>
      <form className={styles.form} action={addProduct}>
        <input type="text" placeholder='username' name='username' required/>
        <input type="email" placeholder='email' name='email' required/>
        <input type="password" placeholder='password' name='password' required/>
        <input type="phone" placeholder='phone' name='phone'/>
        <select name="isAdmin" id="isAdmin">
          <option value={false}>is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={false}>is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea name="address" id="address" rows="15" placeholder='address'></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
