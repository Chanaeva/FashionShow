
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('show').del()
    .then(function () {
      const shows = [{
         date: '1/2/2055',
         location: 'Platte St',
       }];
       return knex('show').insert(shows);
    });
};
