/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('food').del()
  await knex('food').insert([
    {id: 1, name: 'Chicken Alfredo'},
    {id: 2, name: 'Lobster bisque'},
    {id: 3, name: 'Cinnoman Rasin'},
    {id: 4, name: 'Garden'},
  ]);
};
