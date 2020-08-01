const mongoose = require("mongoose");

const SearchQuerySchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// params: schemaName, schema, collection name
module.exports = mongoose.model("SearchQuery", SearchQuerySchema, "searches");
