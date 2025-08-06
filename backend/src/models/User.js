import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    name : { type : String, required: true },
    email : { type: String , required  : true },
    role : { type : String, enum : [ 'Customer', 'Admin'], default: 'Customer' },
    password : { type: String, required : true }
});

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next()
    try {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        next()
    } catch(e) {
        next(e)
    }
})

const User = mongoose.model('User',userSchema)
export default User;