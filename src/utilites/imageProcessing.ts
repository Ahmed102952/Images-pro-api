import sharp from "sharp";

export default async (
    width: string,
    height: string,
    inputFileName: string,
    inputPath: string,
    outputFileName: string,
    outputPath: string
): Promise<void> => {
    await sharp(inputPath + inputFileName)
        .resize({
            width: parseInt(width),
            height: parseInt(height),
        })
        .toFile(outputPath + outputFileName);
};
