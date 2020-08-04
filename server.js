const express = require("express");
// Allows us to create global variables
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const searches = require("./routes/searches");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());

connectDB();

if (process.env.NODE_ENV == "development") {
    app.use(morgan("dev"));
}

app.use("/api/searches", searches);

if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
    app.get("*", (req, res) =>
        res.sendfile(path.resolve(__dirname, "client", "build", "index.html"))
    );
}

app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
