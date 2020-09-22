const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true }
}, { timestamps: { createdAt: 'created_at' } });


module.exports = mongoose.model("user", UserSchema);