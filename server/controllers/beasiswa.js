const Beasiswa = require("../models/beasiswa");
const createError = require("../utils/createError");

module.exports.addBeasiswa = async (req, res, next) => {
  try {
    const beasiswa = new Beasiswa({ ...req.body });
    res.status(201).json(beasiswa);
  } catch (error) {
    next(error);
  }
};

module.exports.getBeasiswas = async (req, res, next) => {
  try {
    const beasiswa = await Beasiswa.find({});
    res.status(200).json(beasiswa);
  } catch (error) {
    next(error);
  }
};

module.exports.getBeasiswa = async (req, res, next) => {
  const { id } = req.params;
  try {
    const beasiswa = await Beasiswa.findById(id);
    if (!beasiswa) return next(createError(401, "Scholarship Not Found!"));

    res.status(200).json(beasiswa);
  } catch (error) {
    next(error);
  }
};

module.exports.updateBeasiswa = async (req, res, next) => {
  const { id } = req.params;
  try {
    const beasiswa = await Beasiswa.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    if (!beasiswa) return next(createError(401, "Scholarship Not Found!"));

    res.status(200).json(beasiswa);
  } catch (error) {
    next(error);
  }
};

module.exports.deleteBeasiswa = async (req, res, next) => {
  const { id } = req.params;
  try {
    const beasiswa = await Beasiswa.findByIdAndDelete(id);
    if (!beasiswa) return next(createError(401, "Scholarship Not Found!"));

    res.status(200).json("Scholarship has been deleted");
  } catch (error) {
    next(error);
  }
};
