import supertest from "supertest";
import app from "../app";

const req = supertest(app);
describe("Test endpoint responses", () => {
    it("Test the server", async () => {
        const res = await req.get("/");
        expect(res.status).toBe(200);
    });
    it("Test the server images api", async () => {
        const res = await req.get("/api/images?fileName=icelandwaterfall&width=100&height=100");
        expect(res.status).toBe(200);
        expect(res.headers['content-type']).toBe('image/jpeg')
    });
    it("test if the server gets the image", async () => {
        const res = await req.get(
            "/api/images?fileName=icelandwaterfal&width=100&height=100"
        );
        expect(res.status).toBe(404);
    });
    it("should return status 400 when width or height are wrong value", async () => {
        const res = await req.get(
            "/api/images?fileName=icelandwaterfall&width=word&height=100"
        );
        expect(res.status).toBe(400);
    });
});
