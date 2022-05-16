"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var imagesApi_1 = __importDefault(require("../../../routes/api/images/imagesApi"));
describe("Test functionality", function () {
    it("should return true if the file or directory exists", function () {
        expect(imagesApi_1.default.exists("build/assests")).toBeTrue;
    });
    it("should return false if the file or directory does not exists", function () {
        expect(imagesApi_1.default.exists("build/images")).toBeFalse;
    });
});
