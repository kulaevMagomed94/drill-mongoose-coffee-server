const mongoose = require("mongoose");

const drinkSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, min: 0, max: 1000, default: 50 },
  inStock:  { type: Boolean, default: true },
  ContainCaffeine: { type: Boolean, default: true },
  size: { type: Number, min: 50, max: 150, default: 100 },
  DescriptionDrink: String,
});

const Drink = mongoose.model("Drink", drinkSchema);

module.exports = Drink;
