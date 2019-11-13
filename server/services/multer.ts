import GridFsStorage from "multer-gridfs-storage";
import crypto from "crypto";
import multer from "multer";
import path from "path";

interface File {
  filename: string;
  bucketName: string;
}

export const storage = new GridFsStorage({
  url: process.env.MONGO_DB_URI,
  file: (req, file): Promise<File> => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename,
          bucketName: "uploads",
        };
        resolve(fileInfo);
      });
    });
  },
});

export const upload = multer({ storage });
