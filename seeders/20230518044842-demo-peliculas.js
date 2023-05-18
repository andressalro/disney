"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Peliculas", [
      {
        imagen: "imagen1.jpg",
        titulo: "Película 1",
        calificacion: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imagen: "imagen2.jpg",
        titulo: "Película 2",
        calificacion: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Peliculas", null, {});
  },
};
