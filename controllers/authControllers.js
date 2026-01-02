const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();



exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  const hash = await bcrypt.hash(password, 10);
  console.log(name, email, password);
  
  await User.create({ name, email, password: hash,  role: role === "admin" ? "admin" : "user"   });

  res.json({ message: "Registered successfully" });
};

exports.login = async (req, res) => {
  
  const user = await User.findOne({ email: req.body.email });

  console.log(req.body);
  
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(req.body.password, user.password);
  console.log("Testingggg",isMatch); 
  
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
      { expiresIn: "1d" }

  );

  console.log(token);
  

  res.json({ token });
};
