exports.seed = async function (knex) {
  await knex('services').del()
  await knex('services').insert([
    {
      name: 'Distribuidora Itajubá',
      group: 'bebidas',
      description: 'As melhores bebidas se encontram aqui!',
      thumb: 'dist1.jpg',
    },
    {
      name: 'Bebidas 24h',
      group: 'bebidas',
      description: 'Bebidas geladas a qualquer hora do dia!',
      thumb: 'dist2.jpg'
    },
    {
      name: 'Sítio Novo Horizonte',
      group: 'locais',
      description: 'Sítio com área de lazer com piscina e churrasqueira!',
      thumb: 'sitio.jpg'
    },
    {
      name: 'DuChef Buffet',
      group: 'Comidas',
      description: 'Os melhores pratos a sua disposição!',
      thumb: 'buffet.jpg'
    },
    {
      name: 'Doces Manias',
      group: 'Comidas',
      description: 'Docinhos, bolos personalizados e brindes!',
      thumb: 'docesmanias.jpg'
    }
  ]);
};