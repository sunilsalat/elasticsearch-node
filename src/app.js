require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { Client } = require("@elastic/elasticsearch");
const { User } = require("./model/User");

const app = express();
app.use(express.json());

let config;

if (process.env.ENV === "dev") {
    config = {
        node: "http://elastic-search:9200",
    };
} else {
    config = {
        cloud: {
            id: process.env.CLOUD_ID,
        },
        auth: {
            apiKey: process.env.API_KEY,
        },
    };
}

const client = new Client(config);

app.get("/test", async (req, res) => {
    return res.status(200).json({ data: "test route hit" });
});

app.post("/create", async (req, res) => {
    const data = req.body;
    const user = await User.create(data);
    const resp = await client.index({
        index: "my_index",
        id: user._id,
        body: {
            id: user._id,
            firstname: data.firstname,
            lastname: data.lastname,
        },
    });

    console.log({ resp });

    return res.status(201).json({ user });
});

app.post("/read", async (req, res) => {
    const { name } = req.body;
    const response = await client.search({
        index: "my_index",
        body: {
            query: {
                match: {
                    firstname: name,
                },
            },
        },
    });

    console.log({ response });

    const userIds = response.hits.hits.map((hit) => hit._id);

    console.log(userIds);

    const users = await User.find({ _id: { $in: userIds } });

    return res.status(201).json({ users });
});

module.exports = { app, client };
