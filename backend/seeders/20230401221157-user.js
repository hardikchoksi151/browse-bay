"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        user_id: "7692b367-681d-4bb3-bb68-c8ec99be4b66",
        name: "Admin",
        email: "admin@test.com",
        password_hash: "123",
        phone_number: "1111111111",
        is_admin: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        user_id: "b5e6b622-09a4-413e-9719-330ba6e44b26",
        name: "John Doe",
        email: "john.doe@test.com",
        password_hash: "12345",
        phone_number: "1211111111",
        is_admin: false,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null, {});
  },
};
