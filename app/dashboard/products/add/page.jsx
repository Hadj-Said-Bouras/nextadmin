import React from 'react'
import styles from '../../../ui/dashboard/products/addProduct/addProduct.module.css'
import { addProduct } from '../../../lib/actions'


export default function AddProductPage() {
  return (
    <div className={styles.container} action={addProduct}>
      <form className={styles.form} action={addProduct}>
        <input type="text" placeholder='title' name='title' required/>
        <select name="cat" id="cat">
          <option value="general" disabled>Choose a category</option>
          <option value="Whatever">Whatever</option>
          <option value="than waht">than waht</option>
          <option value="okd">okd</option>
        </select>
        <input type="number" placeholder='price' name='price' />
        <input type="number" placeholder='stock' name='stock' />
        <input type="text" placeholder='color' name='color' />
        <input type="text" placeholder='size' name='size' />
        <textarea name="desc" id="desc" rows="15" placeholder='Description'></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}
