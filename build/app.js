"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imagesApi_1 = __importDefault(require("./routes/api/images/imagesApi"));
var app = (0, express_1.default)();
var port = 3000;
app.listen(port, function () {
    console.log("server running on localhost:".concat(port));
});
app.get("/", function (req, res) {
    res.send("Connected!");
});
app.use("/api/images", imagesApi_1.default.images);
exports.default = app;
