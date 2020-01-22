require('dotenv').config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const session = require("express-session");

const sessionConfig = require("./database/sessionConfig");

// Import Routers
const unrestrictedRouter = require("./routers/unrestrictedRouter");
const restrictedRouter = require("./routers/restrictedRouter");

// Import Middleware
const restrictedMiddleware = require("./middleware/restrictedMiddleware");

const server = express();
const port = process.env.PORT || 5000;

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig));

// Use Routers
server.use("/unrestricted", unrestrictedRouter);
server.use("/restricted", restrictedMiddleware, restrictedRouter);

// Sanity Check

server.get("/", (req, res) => {
  res.json({ message: "I work" });
});

// No Route Handler

server.use((req, res) => {
  res.status(400).json({ error: "Route Does Not Exist" });
});

// Global Error Handling
server.use((err, req, res, next) => {
  console.log(`Error: ${err}`);

  res.status(err.status || 500).json({ err });
});

server.listen(port, () => {
  console.log(`\n *** Server running on http://localhost:${port} ***\n`);
});
