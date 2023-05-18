"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Personajes", [
      {
        imagen: "imagen1.jpg",
        nombre: "Personaje 1",
        edad: 30,
        peso: 75.5,
        historia: "Historia del personaje 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        imagen: "imagen2.jpg",
        nombre: "Personaje 2",
        edad: 35,
        peso: 80.2,
        historia: "Historia del personaje 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Agrega más registros de personajes aquí
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Personajes", null, {});
  },
};
