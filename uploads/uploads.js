const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, '/home/tlab06/vatsal/EmployeeId.webp'); // Update the destination path
    },
    // ...
  });
  