const mongoose = require('mongoose');

const jenisBiayaSchema = new mongoose.Schema({
  namaBiaya: { type: String, required: true },
  deskripsi: { type: String, required: true }
});

const JenisBiaya = mongoose.model('JenisBiaya', jenisBiayaSchema);

module.exports = JenisBiaya;
