exports.seed = async function (knex) {
  await knex('exercises').del()
  await knex('exercises').insert([
    {
      name: 'Distribuidora Itajubá',
      series: 4,
      repetitions: 12,
      group: 'bebidas',
      demo: 'supino_inclinado_com_barra.gif',
      thumb: 'dist1.jpg',
    },
    {
      name: 'Bebidas 24h',
      series: 3,
      repetitions: 12,
      group: 'bebidas',
      demo: 'crucifixo_reto.gif',
      thumb: 'dist2.jpg'
    },
    {
      name: 'Sítio Novo Horizonte',
      series: 3,
      repetitions: 12,
      group: 'locais',
      demo: 'supino_reto_com_barra.gif',
      thumb: 'sitio.jpg'
    },
    {
      name: 'DuChef Buffet',
      series: 3,
      repetitions: 12,
      group: 'Comidas',
      demo: 'frances_deitado_com_halteres.gif',
      thumb: 'frances_deitado_com_halteres.png'
    },
    {
      name: 'Doces Manias',
      series: 3,
      repetitions: 12,
      group: 'Comidas',
      demo: 'frances_deitado_com_halteres.gif',
      thumb: 'frances_deitado_com_halteres.png'
    }
  ]);
};