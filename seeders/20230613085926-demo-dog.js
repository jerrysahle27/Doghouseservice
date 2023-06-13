"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Dogs",
      [
        {
          name: "Neo",
          color: "red&amber",
          tailLength: "22",
          weight: "32",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jessy",
          color: "black&white",
          tailLength: "7",
          weight: "14",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Dogs", null, {});
  },
};
