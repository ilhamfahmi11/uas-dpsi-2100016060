const mongoose = require('mongoose');

const dataSiswaSchema = new mongoose.Schema({
  namaLengkap: { type: String, required: true },
  jenisKelamin: { type: String, required: true },
  tanggalLahir: { type: Date, required: true },
  NIS: { type: String, required: true },
  namaOrangTua: { type: String, required: true },
  nomorTelepon: { type: String, required: true },
  alamatEmail: { type: String, required: true },
  alamatRumah: { type: String, required: true }
});

const DataSiswa = mongoose.model('DataSiswa', dataSiswaSchema);

module.exports = DataSiswa;
