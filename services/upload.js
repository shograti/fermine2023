const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
      callBack(null, 'uploads');
    },
    filename: function (req, file, cb) {
      let extArray = file.mimetype.split('/');
      console.log(file)
      cb(null, file.originalname);
    },
  });

  let upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype == 'application/pdf'
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Only pdf format allowed'));
      }
    },
  });

  module.exports = upload