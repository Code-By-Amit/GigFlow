import express, { Request, Response, NextFunction } from "express"
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import 'dotenv/config'
import connectDB from "./config/database.js";
import authRoutes from "./routes/auth.routes.js";
import leadRoutes from "./routes/lead.routes.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors({
    origin: [process.env.CLIENT_URL!, "http://localhost:5173"],
    credentials: true
}));


// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cookieParser());


app.use("/api/auth", authRoutes);

app.use("/api/leads", leadRoutes);


app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });
});

connectDB();

app.listen(PORT, () => {
    console.log("Server Started Sucessfully on PORT: ", PORT);
})