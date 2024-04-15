/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('food_type').del()
  await knex('food_type').insert([
    {id: 1, name: 'pasta'},
    {id: 2, name: 'soup'},
    {id: 3, name: 'bread'},
    {id: 4, name: 'salad'}
  ]);
};
