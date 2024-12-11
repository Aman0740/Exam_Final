const dotenv = require("dotenv");
const express = require("express");
const connection = require("./db");
const UserRoutes = require("./routes/user.routes");
const cors = require ("cors")
const cookieParser = require("cookie-parser");
const Blogrouter = require("./routes/blog.routes");
const app = express();

dotenv.config();
app.use(cors({
  origin: "http://localhost:3000",
  credentials:true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/user", UserRoutes);
app.use("/post", Blogrouter);

app.listen(process.env.PORT || 3000, async () => {
  try {
    await connection;
    console.log(`server is runnig on port ${process.env.PORT || 3000}`);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
});
