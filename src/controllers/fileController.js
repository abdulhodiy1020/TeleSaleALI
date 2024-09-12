const multer = require("multer");
const File = require("../models/fileModel");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

exports.upload = multer({ storage });

exports.uploadFile = (req, res) => {
  res
    .status(201)
    .json({ message: "File uploaded successfully", file: req.file });
};

// Create file
exports.createFile = async (req, res) => {
  const { filename, path, uploadedBy } = req.body;
  try {
    const file = new File({ filename, path, uploadedBy });
    await file.save();
    res.status(201).json({ message: "File created successfully", file });
  } catch (err) {
    res
      .status(500)
      .json({ message: "File creation failed", error: err.message });
  }
};

exports.getFiles = async (req, res) => {
  try {
    const files = await File.find();
    res.status(200).json(files);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to retrieve files", error: err.message });
  }
};

exports.getFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) return res.status(404).json({ message: "File not found" });

    res.status(200).json(file);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to retrieve file", error: err.message });
  }
};

exports.updateFile = async (req, res) => {
  try {
    const updatedFile = await File.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedFile)
      return res.status(404).json({ message: "File not found" });

    res.status(200).json({ message: "File updated successfully", updatedFile });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to update file", error: err.message });
  }
};

exports.deleteFile = async (req, res) => {
  try {
    await File.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "File deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete file", error: err.message });
  }
};
