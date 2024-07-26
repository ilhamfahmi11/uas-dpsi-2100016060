const DataUser = require('../models/datauser');

exports.create = async (req, res) => {
  try {
    const dataUser = new DataUser(req.body);
    await dataUser.save();
    res.status(201).json(dataUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  try {
    const dataUsers = await DataUser.find();
    res.status(200).json(dataUsers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const dataUser = await DataUser.findById(id);
    if (dataUser) {
      res.status(200).json(dataUser);
    } else {
      res.status(404).json({ message: 'User tidak ditemukan' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const dataUser = await DataUser.findByIdAndUpdate(id, req.body, { new: true });
    if (dataUser) {
      res.status(200).json(dataUser);
    } else {
      res.status(404).json({ message: 'User tidak ditemukan' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    const dataUser = await DataUser.findByIdAndDelete(id);
    if (dataUser) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'User tidak ditemukan' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
