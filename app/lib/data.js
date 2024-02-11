import { connectToDB } from "./utils";
import {User, Product} from './models'

export const fetchUsers = async () => {
    try {
        await connectToDB();
        const users = await User.find()
        // const products = await Product.find()
        return users
    } catch (err) {
        console.error(err);
        throw new Error("error when fetch users!" + err, {status: 500});
    }
};
