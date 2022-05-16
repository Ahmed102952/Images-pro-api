import express from "express";
import imagesApi from "./routes/api/images/imagesApi";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`server running on localhost:${port}`);
});

app.get("/", (req, res) => {
    res.send("Connected!");
});

app.use("/api/images", imagesApi.images);

export default app;
