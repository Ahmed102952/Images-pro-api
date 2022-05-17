import express, { Request, Response } from "express";
import path from "path";
import sharp from "../../../utilites/imageProcessing";
import validateParametrs from "../../../middleware/validateParameters";

const images = express.Router();

images.use(
    "/",
    validateParametrs,
    async (req: Request, res: Response): Promise<void> => {
        const inputFileName = `${req.query.fileName}.jpg`;
        const width = req.query.width as unknown;
        const height = req.query.height as unknown;
        const outputFileName = `${req.query.fileName}-w${width}_h${height}.jpg`;
        const inputPath: string =
            path.resolve(__dirname, "../../../../assests/full") + "/";
        const outputPath: string =
            path.resolve(__dirname, "../../../../assests/thum") + "/";

        // resizing the img and serve it
        try {
            await sharp(
                width as string,
                height as string,
                inputFileName,
                inputPath,
                outputFileName,
                outputPath
            );
            res.sendFile(outputFileName, {
                root: outputPath,
                Headers: { "content-type": "image/jpg" },
            });
        } catch (err) {
            res.send("faild");
        }
    }
);

export default images;
