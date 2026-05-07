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
        origin : [ process.env.CORS_DEV_ORIGIN ],
        credentials : true
    }
));

app.use("/api", chatRoutes);
app.get("/test" , (req , res)=>{
    res.json({
        success : true,
    })
})

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