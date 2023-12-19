import { Product, User } from "./models";
import { connectDb } from "./utils";

export const fetchUsers = async (q, page) => {
    const regex = new RegExp(q, "i");
    const itemPerPage = 5;
    try {
        const count = await User.find({ username: { $regex: regex } }).count();
        const users = await User.find({ username: { $regex: regex } }).limit(itemPerPage).skip(itemPerPage * (page - 1));
        return { users, count };
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch the Users");
    }
}

export const fetchProducts = async (q, page) => {
    const regex = new RegExp(q, "i");
    const itemPerPage = 5;
    try {
        const count = await Product.find({ title: { $regex: regex } }).count();
        const products = await Product.find({ title: { $regex: regex } }).limit(itemPerPage).skip(itemPerPage * (page - 1));
        return { products, count };
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch the Users");
    }
}

export const singleUser = async (id) => {
    try {
        connectDb();
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Couldn't fetch the user");
    }
}

export const singleProduct = async (id) => {
    try {
        connectDb();
        const product = await Product.findById(id);
        return product;
    } catch (err) {
        console.log(err);
        throw new Error("Couldn't fetch the user");
    }
}