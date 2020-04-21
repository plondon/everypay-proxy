"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
const port = 3000;
app.use(express_1.default.json());
app.use(cors_1.default());
app.post("/api/v3/mobile_payments/card_details*/", (req, res) => {
    console.log(req);
    const request = axios_1.default({
        method: 'POST',
        url: 'https://igw-demo.every-pay.com/api/v3/mobile_payments/card_details',
        data: Object.assign({}, req.body),
        headers: {
            'Content-Type': 'application/json',
            Authorization: req.headers.authorization
        }
    });
    return request.then((data) => res.send(data)).catch((e) => { res.send(e); });
});
app.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    return console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=app.js.map