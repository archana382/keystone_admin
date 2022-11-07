const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
    profileImg: {
        type: String
    }
}, {
    collection: 'uploads'
})

module.exports = mongoose.model("UploadFile", uploadSchema);
