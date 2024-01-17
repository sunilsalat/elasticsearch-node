const { Client } = require("@elastic/elasticsearch");

let elasticsearchClient;
const connectToEs = async () => {
    if (!elasticsearchClient) {
        elasticsearchClient = new Client({
            node: "http://elastic-search:9200",
        });
    }
    return elasticsearchClient;
};

module.exports = { elasticsearchClient, connectToEs };
