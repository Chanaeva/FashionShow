
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('show').del()
    .then(function () {
      const shows = [{
         date: '1/2/2055',
         location: 'Platte St',
         designer: "Gucci",
         model: "Gigi",
      },{
         date: '5/6/20',
         location: 'Poop Rd',

         designer: "Balmain",
         model: "Bella",
      },{
         date: '3/4/2065',
         location: 'Sleep Please St',
        
         designer: "Valentino",
         model: "Lara Stone",
      }];
       return knex('show').insert(shows);
    });
};
