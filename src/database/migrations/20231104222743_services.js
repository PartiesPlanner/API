exports.up = knex => knex.schema.createTable("services", table => {
    table.increments("id");
    table.text("name").notNullable();
    table.text("group").notNullable();
    table.text("description").notNullable();
    table.text("thumb").notNullable();
    table.timestamp("date");  // Novo campo para a data
    table.timestamp("created_at").default(knex.fn.now());
    table.timestamp("updated_at").default(knex.fn.now());
  });
  
  exports.down = knex => knex.schema.dropTable("services");