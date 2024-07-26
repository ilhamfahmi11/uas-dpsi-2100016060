const mongoose = require('mongoose');

const dataUserSchema = new mongoose.Schema({
  nama: { type: String, required: true },
  kelas: { type: String, required: true },
  tanggalLahir: { type: Date, required: true },
  nomorTeleponOrangTua: { type: String, required: true },
  alamat: { type: String, required: true }
});

const DataUser = mongoose.model('DataUser', dataUserSchema);

module.exports = DataUser;
