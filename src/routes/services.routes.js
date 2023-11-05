const { Router } = require("express");

const ServicesController = require("../controllers/ServicesController");

const servicesRoutes = Router();

const servicesController = new ServicesController();

servicesRoutes.get("/bygroup/:group", servicesController.index);
servicesRoutes.get("/:id", servicesController.show);

module.exports = servicesRoutes;