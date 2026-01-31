const express = require("express");
const cors = require("cors");

const app = express();

// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "https://task-management-rho-green.vercel.app"
//     ],
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     credentials: true
//   })
// );

// app.options("/*", cors());


app.use(cors({
  origin: true,
  credentials: true
}));

app.options("/*", cors());



app.use(express.json());

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/tasks", require("./routes/taskRoutes"));
app.use('/api', require("./routes/adminRoute"))

module.exports = app;
