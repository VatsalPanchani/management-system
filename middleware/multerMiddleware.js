const multer = require('multer');
const path = require('path');
// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now();
    const filename = uniqueSuffix + path.extname(file.originalname); // Use EmployeeId.webp as the filename
    cb(null, filename);
  }
});
upload = multer({ storage });

module.exports = upload;
