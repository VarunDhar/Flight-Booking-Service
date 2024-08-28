'use strict';
/** @type {import('sequelize-cli').Migration} */
const {PENDING,INITIATED,CANCELLED,BOOKED} = require("../utils/common/enums").BOOKING_STATUS;

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightId: {
        type: Sequelize.INTEGER,
        allowNull:false 
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull:false 
      },
      status: {
        type: Sequelize.ENUM,
        values:[PENDING,INITIATED,CANCELLED,BOOKED],
        defaultValue:INITIATED,
        allowNull:false
      },
      totalCost: {
        type: Sequelize.INTEGER,
        allowNull:false 
      },
      noOfSeats:{
        type: Sequelize.INTEGER,
        defaultValue:1,
        allowNull:false 
      } ,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bookings');
  }
};