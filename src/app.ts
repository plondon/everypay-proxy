import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.post("/api/v3/mobile_payments/card_details*/", (req, res) => {
  console.log(req)
  const request = axios({
    method: 'POST',
    url: 'https://igw-demo.every-pay.com/api/v3/mobile_payments/card_details',
    data: { ...req.body },
    headers: {
      'Content-Type': 'application/json',
      Authorization: req.headers.authorization
    }
  })

  return request.then((data) => res.send(data)).catch((e) => { res.send(e) })
  
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
