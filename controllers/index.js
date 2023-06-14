const { Dog } = require("../models");
const { getPagination } = require("../query");
const { ValidateInput } = require("../validator");
const createDog = async (req, res) => {
  try {
    const validate = ValidateInput(req.body);
    console.log(validate);
    if (Object.values(validate).length != 0) {
      return res.status(400).json(validate);
    }

    const validateInputName = await Dog.findOne({
      where: { name: req.body.name },
    });
    if (validateInputName !== null) {
      return res.status(400).json({
        message: "Dog Already Exists",
      });
    }
    const dog = await Dog.create(req.body);
    return res.status(201).json({
      dog,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getAllDogs = async (req, res) => {
  try {
    if (req.query.attribute !== undefined && req.query.order !== undefined) {
      const { attribute, order } = req.query;
      const dogs = await Dog.findAll({
        order: [[attribute, order]],
        attributes: ["name", "color", "tailLength", "weight"],
      });
      return res.status(200).json({ dogs });
    } else {
      const { pageNumber, limit } = getPagination(req.query);
      const dogs = await Dog.findAll({
        offset: pageNumber,
        limit: limit,
        attributes: ["name", "color", "tailLength", "weight"],
      });
      return res.status(200).json({ dogs });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
module.exports = {
  createDog,
  getAllDogs,
};
