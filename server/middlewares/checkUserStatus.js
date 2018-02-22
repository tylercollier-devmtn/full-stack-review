module.exports = function(req, res, next) {
  const user = req.session.user;
  if (!user) {
    res.status(403).json({ message: 'Unauthorized' });
  } else {
    next();
  }
}