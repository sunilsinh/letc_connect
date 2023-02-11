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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const compression_1 = __importDefault(require("compression"));
const express_sanitizer_1 = __importDefault(require("express-sanitizer"));
const helmet_1 = __importDefault(require("helmet"));
class App {
    constructor(config) {
        this.port = config.port;
        this.expressApp = (0, express_1.default)();
        this.expressApp.use((0, cors_1.default)());
        this.expressRouter = express_1.default.Router();
        this.expressApp.use(this.expressRouter);
    }
    bootstrapCommonMiddileware() {
        this.expressApp.use((0, helmet_1.default)());
        this.expressApp.use((0, compression_1.default)());
        this.expressApp.use((0, express_sanitizer_1.default)());
    }
    bootstrap() {
        return __awaiter(this, void 0, void 0, function* () {
            this.bootstrapCommonMiddileware();
        });
    }
    mount(path, ...handlers) {
        this.expressRouter.use(
        // '/api',// can define api base url
        express_1.default.json(), ...handlers);
    }
    listen() {
        this.expressApp.listen(this.port, () => {
            console.log(`Applications is running on port ${this.port}`);
        });
    }
}
exports.App = App;
//# sourceMappingURL=app.js.map