const stockRoute = require("express").Router();
const StockController = require("../controllers/StockController");

stockRoute.get("/",StockController.getStock);
stockRoute.get("/detail/:id",StockController.getStockById);
stockRoute.get("/submit",StockController.submitPage)
stockRoute.post("/submit",StockController.submit);
stockRoute.post("/cancel",StockController.cancel);
stockRoute.get("/remove/:id",StockController.remove);
stockRoute.get("/edit/:id",StockController.editPage)
stockRoute.post("/edit/:id",StockController.edit);

module.exports = stockRoute;