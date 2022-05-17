import supertest from "supertest";
import app from "../app";

const req = supertest(app);

describe("Test endpoint responses", () => {
    it("gets the api endpoint", async () => {
        const res = await req.get("/");
        expect(res.status).toBe(200);
    });
    it("Test the server images api", async () => {
        const res = await req.get(
            "/api/images?fileName=icelandwaterfall&width=100&height=100"
        );
        expect(res.status).toBe(200);
        expect(res.headers["content-type"]).toBe("image/jpeg");
    });
});
