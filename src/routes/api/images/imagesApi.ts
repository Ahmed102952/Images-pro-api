import express from "express";
import { promises as fs } from "fs";
import path from "path";
import sharp from "sharp";
const images = express.Router();

images.get("/", async (req, res) => {
    const inputFileName: string = `${req.query.fileName}.jpg`;
    const width = req.query.width as unknown;
    const height = req.query.height as unknown;
    const outputFileName: string = `${req.query.fileName}-w${width}_h${height}.jpg`;
    const inputPath: string = path.resolve("./build/assests/") + "\\full\\";
    const outputPath: string = path.resolve("./build/assests/") + "\\thum\\";

    if (await exists(outputPath + outputFileName)) {
        // checking if the required img exists if its exist serve it and stop
        res.sendFile(outputFileName, { root: outputPath });
        return;
    }
    if (!(await exists(inputPath + inputFileName))) {
        // checking if the img exists if not send message and stop the function
        res.status(404).send("Can't find image");
        return;
    }
    if (!(await exists(outputPath))) {
        // check if the output dir exists if not make the directory
        fs.mkdir(outputPath);
    }
    // resizing the img and serve it
    try {
        await sharp(inputPath + inputFileName)
            .resize({
                width: parseInt(width as string),
                height: parseInt(height as string),
            })
            .toFile(outputPath + outputFileName);
        res.sendFile(outputFileName, {
            root: outputPath,
            Headers: { "content-type": "image/jpg" },
        });
    } catch (err) {
        console.log(err);
        res.status(400).send("Faild");
    }
});

//function to check if the file|dir exists

async function exists(path: string): Promise<boolean> {
    try {
        await fs.access(path);
        return true;
    } catch {
        return false;
    }
}

export default {
    images,
    exists,
};
