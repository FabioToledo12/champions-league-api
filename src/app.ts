import cors from "cors";
import express from "express";
import router from "./routes";

const createApp = () => {

    const app = express();
    
    app.use(express.json());
    app.use("/api", router)
    app.use(cors())

    // app.use(cors("www.fabin*"))
    // const corsOptions = {
    //     origin: "http://localhost:3000"
    //     origin: ["http://localhost:3000", "http://gob.br"],
    //     methods: ["GET", "POST", "PUT", "DELETE"],
    // }
    // app.use(cors(corsOptions))

    // app.get("/", getPlayer);

    return app;
} 

export default createApp;