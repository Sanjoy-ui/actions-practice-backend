import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";

const app = express();
const PORT = process.env.PORT || 8080;
const CORS_ORIGIN = process.env.CORS_ORIGIN ;

app.use(express.json());
app.use(cors(
    {
        origin : [CORS_PROD_ORIGIN , CORS_DEV_ORIGIN ],
        credentials : true
    }
));

app.use("/api", chatRoutes);

app.listen(PORT, () => {
    connectDB();
});

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
    } catch(err) {
        process.exit(1);
    }
}