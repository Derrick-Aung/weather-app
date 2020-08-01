const express = require("express");
// Allows us to create global variables
const dotenv = require("dotenv");
const searches = require("./routes/searches");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");

    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );

    next();
});

connectDB();

if (process.env.NODE_ENV == "development") {
    app.use(morgan("dev"));
}

if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) =>
        res.sendfile(path.resolve(__dirname, "client", "build", "index.html"))
    );
}

app.use("/api/searches", searches);
app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
