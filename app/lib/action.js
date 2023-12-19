import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectDb } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt"
import { signIn } from "../auth";
export const addUser = async (formData) => {
    "use server"
    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);
    try {
        connectDb();
        const hashedPass = bcrypt.hashSync(password, 10);

        const newUser = new User({
            username, email, password: hashedPass, phone, address, isAdmin, isActive
        });
        await newUser.save();
    } catch (err) {
        console.log(err);
        throw new Error("Failed to create user");
    }
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}

export const addProduct = async (formData) => {
    "use server"
    try {
        connectDb();
        const { title, desc, price, cat, stock, color, size } = Object.fromEntries(formData);

        const newProduct = new Product({
            title, price, desc, cat, stock, color, size
        });

        await newProduct.save();
    }
    catch {
        console.log(err);
        throw new Error("Failed to created product");
    }
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
}

export const deleteProduct = async (formData) => {
    "use server"
    const { id } = Object.fromEntries(formData);
    try {
        connectDb();
        await Product.findByIdAndDelete(id);
    }
    catch (err) {
        console.log(err);
        throw new Error("Failed to delete the product");
    }
    revalidatePath("/dashboard/products");
}

export const deleteUser = async (formData) => {
    "use server"
    const { id } = Object.fromEntries(formData);
    try {
        connectDb();
        await User.findByIdAndDelete(id);
    }
    catch (err) {
        console.log(err);
        throw new Error("Failed to delete the product");
    }
    revalidatePath("/dashboard/users");
}

export const updateUser = async (formData) => {
    "use server"
    const { id, username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);
    try {
        connectDb();
        const updateFields = {
            ...(username && { username }),
            ...(email && { email }),
            ...(password && { password: bcrypt.hashSync(password, 10) }),
            ...(phone && { phone }),
            ...(address && { address }),
            ...(isAdmin !== undefined && { isAdmin }),
            ...(isActive !== undefined && { isActive }),
        };
        console.log(updateFields);
        await User.findByIdAndUpdate(id, updateFields);

    } catch (err) {
        console.log(err);
        throw new Error("Failed to update the user");
    }
    revalidatePath("/dashboard/users");
    redirect("/dashboard/users");
}

export const updateProduct = async (formData) => {
    "use server"
    const { id, title, price, cat, desc, stock, img, color, size } = Object.fromEntries(formData);
    try {
        connectDb();
        const updateFields = {
            ...(title && { title }),
            ...(desc && { desc }),
            ...(stock && { stock }),
            ...(price && { price }),
            ...(img && { img }),
            ...(color && { color }),
            ...(size && { size }),
            ...(cat && { cat }),
        };
        await Product.findByIdAndUpdate(id, updateFields);
    } catch (err) {
        console.log(err);
        throw new Error("Error in updating the product")
    }
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
}

export const authenticate = async (formData) => {
    "use server"
    const { username, password } = Object.fromEntries(formData);

    try {
        await signIn("credentials", { username, password });
        redirect("/dashboard");
    } catch (err) {
        return "Wrong Credentials!";
    }
};