const mongoose = require('mongoose');

const transaksiSchema = new mongoose.Schema({
  jenisBiaya: { type: String, required: true },
  jumlah: { type: Number, required: true },
  totalPembayaran: { type: Number, required: true }
});

const Transaksi = mongoose.model('Transaksi', transaksiSchema);

module.exports = Transaksi;
