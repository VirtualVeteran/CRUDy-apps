/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('food_type', table => {
    table.increments();
    table.string('name', 250);
    table.integer('food_type_id');
    table.foreign('food_type_id').references('food_type.id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('food_type');
};
