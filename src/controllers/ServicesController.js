const knex = require("../database");

class ServicesController {
  async index(request, response) {
    const { group } = request.params;

    const services = await knex("services").where({ group }).orderBy("name");

    return response.json(services);
  }

  async show(request, response) {
    const { id } = request.params;

    const service = await knex("services").where({ id }).first();

    return response.json(service);
  }
}

module.exports = ServicesController;