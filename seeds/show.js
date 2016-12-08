
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('show').del()
    .then(function () {
      const shows = [{
         date: '1/2/2055',
         location: 'Platte St',
         time: "5pm",
         designer: "Gucci",
         model: "Gigi",
      },{
         date: '5/6/20',
         location: 'Poop Rd',
         time: "10pm",
         designer: "Balmain",
         model: "Bella",
      },{
         date: '3/4/2065',
         location: 'Sleep Please St',
         time: "9pm",
         designer: "Valentino",
         model: "Lara Stone",
      }];
       return knex('show').insert(shows);
    });
};
