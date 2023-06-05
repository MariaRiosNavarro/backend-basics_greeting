import { server } from "./server.js";
import { createServer } from "node:http";

const port = 8000;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
