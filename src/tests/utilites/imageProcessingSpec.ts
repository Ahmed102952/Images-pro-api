import path from "path";
import sharp from "../../utilites/imageProcessing";

describe("test image processing function", () => {
    it("should not throw when inputs are valid", async () => {
        expect(
            await sharp(
                "100",
                "100",
                "icelandwaterfall.jpg",
                path.resolve(__dirname, "../../../assests/full") + "\\",
                "icelandwaterfall-w100_h100.jpg",
                path.resolve(__dirname, "../../../assests/full") + "\\"
            )
        ).not.toThrow;
    });
});
