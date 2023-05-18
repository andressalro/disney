"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Peliculas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Imagen: {
        type: Sequelize.BLOB,
      },
      Titulo: {
        type: Sequelize.STRING,
      },
      Calificacion: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
    await queryInterface.createTable("PersonajePelicula", {
      personajeId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Personajes",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      peliculaId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Peliculas",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
    await queryInterface.createTable("GeneroPelicula", {
      generoId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Generos",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      peliculaId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: "Peliculas",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("GeneroPelicula");
    await queryInterface.dropTable("PersonajePelicula");
    await queryInterface.dropTable("Peliculas");
  },
};
