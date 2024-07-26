const mongoose = require('mongoose');

const jenisPembayaranSchema = new mongoose.Schema({
  namaJenisPembayaran: { type: String, required: true },
  deskripsi: { type: String, required: true }
});

const JenisPembayaran = mongoose.model('JenisPembayaran', jenisPembayaranSchema);

module.exports = JenisPembayaran;
