const express = require('express');
const authenticateToken = require('../middleware/auth'); // Middleware untuk otorisasi
const router = express.Router();

// Rute terproteksi, hanya dapat diakses oleh pengguna yang telah terotentikasi
router.get('/protected', authenticateToken, (req, res) => {
    // Membatasi hak akses terhadap sumber daya data tertentu
    // Hanya pengguna dengan token yang valid dapat mengakses rute ini
    res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;
