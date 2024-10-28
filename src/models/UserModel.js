const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        CustomerID: {type: Number, required: true},
        FullName: { type: String, required: true },
        Email: { type: String, required: true, unique: true },
        PasswordHash: { type: String, required: true },
        isAdmin: { type: Boolean, default: false, required: true },
        PhoneNumber: { type: Number, required: true },
        Address: {type: String, required: true},
        access_token: { type: String, require: true },
        refresh_token: { type: String, require: true },
        CartID:{type: Number, require: true}
    },
    {
        timestamps: true
    }
);
const User = mongoose.model('customers', userSchema);
module.exports = User;