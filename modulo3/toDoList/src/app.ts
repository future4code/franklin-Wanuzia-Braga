import express from "express";
import cors from "cors";
import { AddressInfo } from "net";



const app = express();
const port = process.env.PORT || 3006

app.use(express.json());
app.use(cors());


const server = app.listen(port, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app