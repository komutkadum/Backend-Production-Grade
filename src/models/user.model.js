import mongoose, {Schema} from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const userScheme = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true, 
            lowercase: true,
            trim: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true, 
            lowercase: true,
            trim: true,
        },
        fullname: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImage: {
            type: String // cloudinary url
        },
        watchHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Video"
            }
        ],
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }
    },
    {
        timestamps: true
    }
)

// we use normal function instead of arrow function in pre to access this reference which is not present in arrow function
userScheme.pre("save",async function(next){
    // if any field is modified other than password, return to next
    if(!this.isModified("password")) return next();
    // hashing the password
    this.password = bcrypt.hash(this.password,10);
    next();
})

userScheme.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, ths.password);
}

userScheme.methods.generateAccessToken =  function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userScheme.methods.generateRefreshToken =  function(){
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.Schema("User",userScheme);