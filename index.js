const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes"); // Đã đúng, không cần import controller riêng

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Sử dụng userRoutes
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
