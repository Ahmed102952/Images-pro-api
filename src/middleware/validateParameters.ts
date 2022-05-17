import { NextFunction, Request, Response } from "express";
import { promises as fs } from "fs";
import path from "path";
import exists from "../utilites/exists";

export default async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const inputPath: string =
        path.resolve(__dirname, "../../assests/full") + "/";
    const outputPath: string =
        path.resolve(__dirname, "../../assests/thum") + "/";
    const width = req.query.width as unknown;
    const height = req.query.height as unknown;
    if (
        isNaN(parseInt(width as string)) ||
        isNaN(parseInt(height as string)) ||
        (width as number) <= 0 ||
        (height as number) <= 0
    ) {
        res.send("Invalid input for height or width");
        return;
    }
    if (!(await exists(inputPath + req.query.fileName + ".jpg"))) {
        // checking if the img exists if not send message and stop the function
        res.status(404).send("Invalid input for filename");
        return;
    }
    if (
        await exists(
            outputPath + req.query.fileName + `-w${width}_h${height}.jpg`
        )
    ) {
        // checking if the required img exists if its exist serve it and stop
        res.sendFile(req.query.fileName + `-w${width}_h${height}.jpg`, {
            root: outputPath,
        });
        return;
    }

    if (!(await exists(outputPath))) {
        // check if the output dir exists if not make the directory
        fs.mkdir(outputPath);
    }
    next();
};
