import express from "express";
import axios from "axios";
import cors from "cors";
import curlirize from 'axios-curlirize';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
curlirize(axios);

app.post("/api/v3/mobile_payments/card_details*/", (req, res) => {
  const request = axios({
    method: 'POST',
    url: 'https://igw-demo.every-pay.com/api/v3/mobile_payments/card_details',
    data: { ...req.body, cc_details: JSON.parse(req.body.cc_details) },
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      Authorization: req.headers.authorization
    }
  })

  return request.then((data) => res.send(data.data)).catch((e) => { res.send(e) })
  
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
