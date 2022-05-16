"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs_1 = require("fs");
var path_1 = __importDefault(require("path"));
var sharp_1 = __importDefault(require("sharp"));
var images = express_1.default.Router();
images.get("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var inputFileName, width, height, outputFileName, inputPath, outputPath, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                inputFileName = "".concat(req.query.fileName, ".jpg");
                width = req.query.width;
                height = req.query.height;
                outputFileName = "".concat(req.query.fileName, "-w").concat(width, "_h").concat(height, ".jpg");
                inputPath = path_1.default.resolve("./build/assests/") + "\\full\\";
                outputPath = path_1.default.resolve("./build/assests/") + "\\thum\\";
                return [4 /*yield*/, exists(outputPath + outputFileName)];
            case 1:
                if (_a.sent()) {
                    // checking if the img exists if not send message and stop the function
                    res.sendFile(outputFileName, { root: outputPath });
                    return [2 /*return*/];
                }
                return [4 /*yield*/, exists(inputPath + inputFileName)];
            case 2:
                if (!(_a.sent())) {
                    // checking if the img exists if not send message and stop the function
                    res.send("Can't find image");
                    return [2 /*return*/];
                }
                return [4 /*yield*/, exists(outputPath)];
            case 3:
                if (!(_a.sent())) {
                    // check if the output dir exists if not make the directory
                    fs_1.promises.mkdir(outputPath);
                }
                _a.label = 4;
            case 4:
                _a.trys.push([4, 6, , 7]);
                return [4 /*yield*/, (0, sharp_1.default)(inputPath + inputFileName)
                        .resize({
                        width: parseInt(width),
                        height: parseInt(height),
                    })
                        .toFile(outputPath + outputFileName)];
            case 5:
                _a.sent();
                res.sendFile(outputFileName, {
                    root: outputPath,
                    Headers: { "content-type": "image/jpg" },
                });
                return [3 /*break*/, 7];
            case 6:
                err_1 = _a.sent();
                console.log(err_1);
                res.send("Faild");
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });
function exists(path) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fs_1.promises.access(path)];
                case 1:
                    _b.sent();
                    return [2 /*return*/, true];
                case 2:
                    _a = _b.sent();
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.default = {
    images: images,
    exists: exists,
};
