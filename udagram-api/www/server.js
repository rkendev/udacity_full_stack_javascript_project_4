"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const sequelize_1 = require("./sequelize");
const config_1 = require("./config/config");
const index_router_1 = require("./controllers/v0/index.router");
const body_parser_1 = __importDefault(require("body-parser"));
const model_index_1 = require("./controllers/v0/model.index");
(() => __awaiter(this, void 0, void 0, function* () {
    console.log('=====config.aws_access_key ' + config_1.config.username);
    console.log('=====config.aws_access_key ' + config_1.config.password);
    console.log('=====config.database ' + config_1.config.database);
    console.log('=====config.host ' + config_1.config.host);
    console.log('=====config.port ' + config_1.config.port);
    console.log('=====config.aws_media_bucket ' + config_1.config.aws_media_bucket);
    console.log('=====config.aws_region ' + config_1.config.aws_region);
    console.log('=====config.jwt.secret ' + config_1.config.jwt.secret);
    console.log('=====config.aws_access_key ' + config_1.config.aws_access_key);
    console.log('======config.aws_secret ' + config_1.config.aws_secret);
    console.log('=====config.port ' + config_1.config.port);
    console.log('=====config.server_port ' + config_1.config.server_port);
    console.log("test1");
    dotenv.config();
    console.log("test2");
    yield sequelize_1.sequelize.addModels(model_index_1.V0_FEED_MODELS);
    console.log("test3");
    yield sequelize_1.sequelize.addModels(model_index_1.V0_USER_MODELS);
    console.log("test4");
    yield sequelize_1.sequelize.sync();
    console.log("test5");
    console.log("Database Connected");
    const app = express_1.default();
    console.log("test6");
    //const port = 8080;
    const port = config_1.config.server_port || 5432;
    console.log("test7");
    app.use(body_parser_1.default.json());
    console.log("test8");
    app.use(cors_1.default());
    console.log("test9");
    app.use("/api/v0/", index_router_1.IndexRouter);
    console.log("test10");
    // Root URI call
    app.get("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
        res.send("/api/v0/");
    }));
    // Start the Server
    app.listen(port, () => {
        console.log(`server running ${process.env.URL}`);
        console.log(`press CTRL+C to stop server`);
    });
}))();
//# sourceMappingURL=server.js.map