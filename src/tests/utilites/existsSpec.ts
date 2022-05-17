import exists from "../../utilites/exists";

describe("test exists function", () => {
    it("should return true when file exsit", async () => {
        expect(await exists(__filename)).toBeTrue();
    });
    it("should return false when file does not exsit", async () => {
        expect(await exists("dirctory/file")).toBeFalse();
    });
    it("should return true when dir exsit", async () => {
        expect(await exists(__dirname)).toBeTrue();
    });
    it("should return false when dir does not exsit", async () => {
        expect(await exists("dirctory")).toBeFalse();
    });
});
