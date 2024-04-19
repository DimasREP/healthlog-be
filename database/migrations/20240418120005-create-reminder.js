'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reminders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
          onDelete: 'CASCADE'
        }
      },
      judul_pengingat: {
        type: Sequelize.STRING
      },
      deskripsi_pengingat: {
        type: Sequelize.STRING
      },
      waktu_pengingat: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addIndex('Reminders', ['user_id']);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reminders');
    await queryInterface.dropTable('Users');
  }
};