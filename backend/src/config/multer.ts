import path from "path";
import multer from "multer";


const storage = multer.diskStorage({
    destination: function (request, file, callBack) {
        let destinationFolder = path.join(__dirname, "..", "..", "uploads")
                
        callBack(null, destinationFolder);
    },

    filename: function (request, file, callBack) {
        callBack(null, Date.now() + "_" + file.originalname);
    }}
)


export const photoUpload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 50,
        files: 9
    },

    fileFilter: function (request, file, callBack) {
        const allowedFileTypes = ["image/png", "image/jpeg", "image/jpg"];

        if (!allowedFileTypes.includes(file.mimetype)){
            const messsage = "Only JPEG, PNG and JPG files are supported";

            return callBack(new Error());
        }

        callBack(null, true);
    }}
)
