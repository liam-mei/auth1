const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// Import Routers

const server = express();
const port = 5000;

server.use(helmet());
server.use(cors());
server.use(express.json());

// Use Routers

// Sanity Check

server.get("/", (req, res) => {
  res.json({ message: "I work" });
});

// Global Error Handling
server.use((err, req, res, next) => {
  console.log(`Error: ${err}`);

  res.status(err.status || 500).json({ error: "Something went wrong" });
});

server.listen(port, () => {
  console.log(`\n *** Server running on http://localhost:${port} ***\n`);
});
