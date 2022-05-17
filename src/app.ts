import express, { Request, Response } from "express";
import imagesApi from "./routes/api/images/imagesApi";

const app = express();
const port = 3000;

app.listen(port, (): void => {
    console.log(`server running on localhost:${port}`);
});

app.get("/", (req: Request, res: Response): void => {
    res.send("Connected!");
});

app.use("/api/images", imagesApi);

export default app;
