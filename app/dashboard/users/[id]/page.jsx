import styles from '../../../ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'

const SingleUserPage = () => {
    return (
        <div className={styles.contianer}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt='' fill/>
                </div>
                John Dowe
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>

                <label>UserName</label>
                <input type="text" name='username' placeholder='John Dowe'/>
                <label>Email</label>
                <input type="email" name='email' placeholder='example@company.com'/>
                <input type="password" name='password' placeholder='**********'/>
                <label>Phone</label>
                <input type="phone" name='phone' placeholder='+2133554433322'/>
                <label>Address</label>
                <textarea type="text" name='username' placeholder='John Dowe'/>
                <select name="isAdmin" id="isAdmin">
                <option value={false} selected>is Admin?</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
                </select>
                <select name="isActive" id="isActive">
                <option value={false} selected>is Active?</option>
                <option value={true}>Yes</option>
                <option value={false}>No</option>
                 </select>
                 <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage;