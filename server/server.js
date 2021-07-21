const express = require("express");

require("dotenv").config();

const loginRoutes = require("./routes/login");

const app = express();
app.use(express.json());

// User Define Middlewares

app.use("/", loginRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});
