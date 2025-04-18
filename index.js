// routing
const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const agentsRoute = require("./routes/agents");
const propertiesRoute = require("./routes/properties");
const app = express();

const port = 5000;
dotenv.config();

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("DB Connection successfully!"))
.catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:3000' }));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/properties", propertiesRoute);
app.use("/api/agents", agentsRoute);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
