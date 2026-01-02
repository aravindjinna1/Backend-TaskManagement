
 


module.exports = (req, res, next) => {
  if (req.user.role !== "admin") {
    console.log("testingtt",req.user.role);
    
    return res.status(403).json({ message: "Access denied (Admins only)" });
  }
  next();
};
