"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("PersonajePelicula", [
      {
        PersonajeId: 1,
        PeliculaId: 1,
      },
      {
        PersonajeId: 1,
        PeliculaId: 2,
      },
      {
        PersonajeId: 2,
        PeliculaId: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("PersonajePelicula", null, {});
  },
};
