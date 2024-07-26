const mongoose = require('mongoose');

const laporanSchema = new mongoose.Schema({
  idSiswa: { type: Number, required: true },
  namaSiswa: { type: String, required: true },
  kelas: { type: String, required: true },
  NIS: { type: String, required: true },
  tanggalPembayaran: { type: Date, required: true },
  jenisPembayaran: { type: String, required: true },
  jumlah: { type: Number, required: true },
  statusPembayaran: { type: String, required: true }
});

const Laporan = mongoose.model('Laporan', laporanSchema);

module.exports = Laporan;
