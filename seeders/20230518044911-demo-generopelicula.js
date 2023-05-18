"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("GeneroPelicula", [
      {
        GeneroId: 1,
        PeliculaId: 1,
      },
      {
        GeneroId: 1,
        PeliculaId: 2,
      },
      {
        GeneroId: 2,
        PeliculaId: 2,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("GeneroPelicula", null, {});
  },
};
