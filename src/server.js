const { default: mongoose, connect } = require("mongoose");
const { app } = require("./app");
const { connectToEs } = require("./config/els");

const start = async () => {
    try {
        await mongoose.connect("mongodb://mongo-search:27017");

        app.listen(8080, () => {
            console.log("Server running on port 8080....");
        });
    } catch (error) {
        console.log({ error });
    }
};

start();
