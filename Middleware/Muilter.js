// import multer from "multer";
// import { v4 as uuid } from "uuid";

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, "uploads"); //image file will be saved in uploads folder
//   },
//   filename(req, file, cb) {
//     const id = uuid(); //this will create random id

//     const extName = file.originalname.split(".").pop(); //this will give extention name of file ex- .png, .jpg etc

//     const filename = `${id}.${extName}`;

//     cb(null, filename);
//   },
// });

// export const uploadFiles = multer({ storage }).single("image");


import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

// Set up Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: ('E-Commerce/uploads'), // Folder in Cloudinary
    allowedFormats: ['jpg', 'png', 'jpeg'],
  },
});

// Create upload middleware
export const uploadFiles = multer({ storage }).single('image');


