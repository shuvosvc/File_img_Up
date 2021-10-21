const express = require("express");
const multer = require("multer");
const UPLOAD_FOLDER = "./Uploads";

let upload = multer({
  dest: UPLOAD_FOLDER,
});

const app = express();

app.post(
  "/",
  upload.fields([
    { name: "avater", maxCount: 1 },
    { name: "gallery", maxCount: 2 },
  ]),
  (req, res) => {
    res.send("while world");
  }
);

app.listen(5000, () => {
  console.log("app listening at port 5000");
});

//.......................................................................
