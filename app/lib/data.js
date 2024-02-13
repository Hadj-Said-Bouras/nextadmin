import { connectToDB } from "./utils";
import {Product, User} from './models'

export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, 'i')
    const ITEM_PER_PAGE = 2;
    try {
        await connectToDB();
        const count = await User.find({username: {$regex:regex}}).count()
        const users = await User.find({username: {$regex:regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1 ))
        
        // const products = await Product.find()
        return {users, count}
    } catch (err) {
        console.error(err);
        throw new Error("error when fetch users!" + err, {status: 500});
    }
};

export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, 'i')
    const ITEM_PER_PAGE = 2;
    try {
        await connectToDB();
        const count = await Product.find({title: {$regex:regex}}).count()
        const products = await Product.find({title: {$regex:regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1 ))
        
        // const products = await Product.find()
        return {products, count}
    } catch (err) {
        console.error(err);
        throw new Error("error when fetch products!" + err, {status: 500});
    }
};
