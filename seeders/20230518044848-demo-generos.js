"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Generos", [
      {
        nombre: "Género 1",
        imagen: "imagen1.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: "Género 2",
        imagen: "imagen2.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Generos", null, {});
  },
};
