const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send('Access Denied');

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).send('Invalid Token');
    req.user = user;
    next();
  });
};

const adminAuth = (req, res, next) => {
  if (req.user.role !== 'admin') return res.status(403).send('Access Denied: Admins only');
  next();
};

module.exports = { auth, adminAuth };
