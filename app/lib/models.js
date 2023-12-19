import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: [3, "Username length must be greater than 2"],
        maxLength: [20, "Maximum length of the username should be less than 21"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    img: {
        types: String
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: true
    },
    phone: {
        type: String
    },
    address: {
        type: String
    }
}, { timestamps: true })

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minLength: [3, "Username length must be greater than 2"],
        maxLength: [20, "Maximum length of the username should be less than 21"]
    },
    desc: {
        type: String,
        required: true,
        unique: true,
    },
    price: {
        type: Number,
        min: 0,
        required: true,
    },
    stock: {
        type: Number,
        min: 0,
        required: true,
    },
    img: {
        types: String
    },
    color: {
        type: String
    },
    size: {
        type: String
    },
    cat: {
        type: String
    }

}, { timestamps: true })

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
