"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.config = {
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: Number(process.env.PORT),
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
    aws_region: process.env.AWS_REGION,
    //aws_region: "eu-central-1",
    aws_profile: process.env.AWS_PROFILE,
    aws_media_bucket: process.env.AWS_BUCKET,
    aws_access_key: process.env.AWS_ACCESS_KEY,
    aws_secret: process.env.AWS_SECRET,
    //aws_media_bucket: "udagram-full-stack-js-bucket",
    url: process.env.URL,
    jwt: {
        secret: process.env.JWT_SECRET,
    },
    server_port: process.env.SERVER_PORT
};
//# sourceMappingURL=config.js.map