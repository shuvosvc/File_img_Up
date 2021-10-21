const express = require("express");
const multer = require("multer");
const path = require("path");
const UPLOAD_FOLDER = "./Uploads";

///////////////auto storage control

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, UPLOAD_FOLDER);
//   },
//   filename: (req, file, cb) => {
//     const fileExt = path.extname(file.originalname);
//     const fileName =
//       file.originalname
//         .replace(fileExt, "")
//         .toLowerCase()
//         .split(" ")
//         .join("_") +
//       "_" +
//       Date.now();
//     cb(null, fileName + fileExt);
//   },
// });

let upload = multer({
  dest: UPLOAD_FOLDER,
  //   storage: storage,
  limits: {
    fileSize: 1000000,
  },
  fileFilter: (req, file, cb) => {
    if (file.fieldname === "avatar") {
      if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
      ) {
        cb(null, true);
      } else {
        cb(new Error("only .jpg,.png,jpeg format allowed"));
      }
    } else if (file.fieldname === "doc") {
      if (file.mimetype === "application/pdf") {
        cb(null, true);
      } else {
        cb(new Error("only .pdf formate allowed"));
      }
    } else {
      cb(new Error("Unknown error"));
    }
  },
});

const app = express();

app.post(
  "/",
  upload.fields([
    { name: "avatar", maxCount: 1 },
    { name: "doc", maxCount: 2 },
  ]),
  (req, res) => {
    res.send("while world");
  }
);

app.listen(5000, () => {
  console.log("app listening at port 5000");
});

//.......................................................................
