import { updateUser } from '../../../lib/actions';
import { fetchUser } from '../../../lib/data';
import styles from '../../../ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'

const SingleUserPage = async ({params}) => {
    const { id } = params;
    const user = await fetchUser(id);
    return (
        <div className={styles.contianer}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={user.img || "/noavatar.png" } alt='' fill/>
                </div>
                {user.username}
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form} action={updateUser}>
                <input type="hidden" value={user.id} name="id"/>
                <label>UserName</label>
                <input type="text" name='username' placeholder={user.username}/>
                <label>Email</label>
                <input type="email" name='email' placeholder={user.email} />
                <input type="password" name='password' placeholder='**********'/>
                <label>Phone</label>
                <input type="phone" name='phone' placeholder={user.phone || "+123456789"}/>
                <label>Address</label>
                <textarea type="text" name='address' placeholder={user.address || "address"}/>
                <select name="isAdmin" id="isAdmin">
                <option value={false}>is Admin?</option>
                <option value={true}  selected={user.isAdmin}>Yes</option>
                <option value={false} selected={!user.isAdmin}>No</option>
                </select>
                <select name="isActive" id="isActive">
                <option value={false} selected>is Active?</option>
                <option value={true} selected={user.isActive}>Yes</option>
                <option value={false} selected={!user.isActive}>No</option>
                 </select>
                 <button type='submit'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage;