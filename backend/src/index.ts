import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectDatabase } from "./database/config";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

const startServer = async () =>{
    await connectDatabase ();
    app.listen(PORT, () =>{
        console.log(`Server running at http://localhost:${PORT}`);
        
    });
};

startServer();