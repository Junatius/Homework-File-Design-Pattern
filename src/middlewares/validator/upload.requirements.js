const { body } = require('express-validator');

const isImageFile = (file) => {
    const allowedExtensions = ['jpg', 'jpeg', 'png'];
    const fileExtension = file.originalname.split('.').pop().toLowerCase();
    return allowedExtensions.includes(fileExtension);
};

const uploadRequirements = [
    body('file')
        .custom((value, { req }) => {
            if (!isImageFile(req.file)) {
                throw new Error('Invalid file type. Only JPG, JPEG, and PNG are allowed.');
            }
            return true;
        }),
];

module.exports = uploadRequirements;