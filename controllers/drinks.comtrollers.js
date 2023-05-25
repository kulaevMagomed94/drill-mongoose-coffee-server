const Drink = require("../models/Drink.model");

module.exports.drinksControllers = {
  getDrinks: (req, res) => {
    Drink.find({}, "_id name price").then((drinks) => {
      res.json(drinks);
    });
  },

  getDrinksInStock: async (req, res) => {
    const inStock = await Drink.find({ inStock: true });
    res.json(inStock);
  },

  getDetailedInformationDrink: (req, res) => {
    Drink.findById(req.params.id).then((drink) => {
      res.json(drink);
    });
  },

  addDrink: async (req, res) => {
    const drink = await Drink.create({ name: req.body.newDrink });
    res.json(drink);
  },

  deleteDrink: async (req, res) => {
    const deleteDrinkbyID = await Drink.findByIdAndDelete(req.params.id);
    res.send(deleteDrinkbyID);
  },

  changeDrink: async (req, res) => {
    const changeDrinkbyID = await Drink.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      price: req.body.price,
      inStock: req.body.inStock,
    });
    res.send(changeDrinkbyID);
  },
};
