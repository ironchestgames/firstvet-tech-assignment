import { readFileSync } from "node:fs";
import { createServer } from "node:http";

const hostname = "127.0.0.1";
const port = 3000;

// Read the JSON file once at startup
const data = readFileSync("./survey.json", "utf8");

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(data);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
