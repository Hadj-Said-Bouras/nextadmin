import { updateProduct } from '../../../lib/actions';
import { fetchProduct } from '../../../lib/data';
import styles from '../../../ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'

const SingleProductPage = async ({params}) => {
    const { id } = params;
    const product = await fetchProduct(id);
    return (
        <div className={styles.contianer}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt='' fill/>
                </div>
                {product.title}
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form} action={updateProduct}>
                    <input type="hidden" name='id' value={product.id} />
                <label>Title</label>
                <input type="text" name='title' placeholder='John Dowe'/>
                <label>Price</label>
                <input type="number" name='price' placeholder='20$'/>
                <label>Stock</label>
                <input type="number" name='stock' placeholder='500'/>
                <label>Color</label>
                <input type="text" name='color' placeholder='green/red/...'/>
                <label>Size</label>
                <textarea type="text" name='size' placeholder='L M XL '/>
                <select name="cat" id="cat">
                    <option value="Kitchen">Kitchen</option>
                    <option value="Computers">Computers</option>
                    <option value='Tools'>Tools</option>
                </select>
                <label>Description</label>
                <textarea name="desc" id="desc" rows="10" placeholder='Description'></textarea>
                 <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProductPage;