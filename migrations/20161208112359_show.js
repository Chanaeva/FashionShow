
exports.up = function(knex, Promise) {
  return knex.schema.createTable('show',function(table) {
   table.increments();
   table.date('date');
   table.string('location');
 })
};

 exports.down = function(knex, Promise) {
 return knex.schema.dropTable('show');
};
