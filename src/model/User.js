const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstname: String,
        lastname: String,
        email: String,
    },
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = { User };
