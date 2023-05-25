const { Router } = require("express");
const { drinksControllers } = require('../controllers/drinks.comtrollers')

const router = Router()

router.get('/drinks', drinksControllers.getDrinks)  // *GET /drinks – список всех напитков
router.get('/drinks/in-stock', drinksControllers.getDrinksInStock) //GET /drinks/in-stock – список всех напитков, которые есть в наличии
router.get('/drinks/:id', drinksControllers.getDetailedInformationDrink) // *GET /drinks/:id – подробная информация о конкретном напитке
router.post('/drinks', drinksControllers.addDrink) // *POST /drinks – добавление нового напитка
router.delete('/drinks/:id', drinksControllers.deleteDrink)// *DELETE /drinks/:id – удаление конкретного напитка
router.patch('/drinks/:id', drinksControllers.changeDrink)// *PATCH /drinks/:id – изменение конкретного напитка

module.exports = router;