const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

const uploadMiddleware = (req, res, next) => {
    upload.single('file')(req, res, (err) => {
        if (err) {
            return res.status(500).json({ error: 'File upload failed.' });
        }

        if (!req.file) {
            return res.status(400).json({ error: 'File is required.' });
        }
        next();
    });
};

module.exports = uploadMiddleware;
