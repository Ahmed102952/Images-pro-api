import imagesApi from "../../../routes/api/images/imagesApi";

describe("Test functionality", () => {
    it("should return true if the file or directory exists", () => {
        expect(imagesApi.exists("build/assests")).toBeTrue;
    });
    it("should return false if the file or directory does not exists", () => {
        expect(imagesApi.exists("build/images")).toBeFalse;
    });
    
});
