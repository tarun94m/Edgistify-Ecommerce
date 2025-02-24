import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import cors from "cors";
import productRoutes from "./routes/productRoute.js"; // Import the products route

//env config
dotenv.config();

//config db
connectDB();

//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routing
app.use("/api/v1/auth", authRoute);
app.use("/api/products", productRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>welcome to the app</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`the server is running on ${PORT}`.bgMagenta.white);
});
