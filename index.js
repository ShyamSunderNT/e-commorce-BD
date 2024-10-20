import express from "express"
import cors from 'cors'
import dotenv from "dotenv"
import connectDB from "./Database/config.js"
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


import authRoute from './Routers/userRouter.js'
import routeProduct from "./Routers/productRoute.js"
import cartRouter from "./Routers/cartRouter.js"
import orderRouter from "./Routers/order.js"
import addressRouter from  "./Routers/address.js"
import { uploadFiles } from "./Middleware/Muilter.js";


dotenv.config();

const app = express();

app.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );


app.use(express.json());


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/uploads/:filename', (req, res) => {
  console.log(`Request for file: ${req.params.filename}`);
  res.sendFile(path.join(__dirname, 'uploads', req.params.filename), (err) => {
      if (err) {
          console.error(err);
          res.status(err.status).end();
      }
  });
});


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });


  connectDB();

  app.use('/api',authRoute)
  app.use('/api',routeProduct)
  app.use("/api",cartRouter)
  app.use('/api',orderRouter)
  app.use("/api",addressRouter)

  app.post('/upload', (req, res) => {
    uploadFiles(req, res, (err) => {
      if (err) {
        return res.status(400).json({ message: 'Error uploading file', error: err });
      }
      res.status(200).json({ message: 'File uploaded successfully', file: req.file });
    });
  });

  app.get("/", (req, res) => {
    res.send("Welcome to the api");
  });


  app.listen(process.env.PORT, () => {
    console.log("Server is running on port");
  });