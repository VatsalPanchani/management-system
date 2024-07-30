const validateUpload = (req, res, next) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
  
    // Add any additional validation logic here
  
    next();
};
  
  module.exports = { validateUpload };
  