'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert('Users', [{
      firstName: 'ECI',
      lastName: 'mock',
      email: 'eci@mock.com',
      password:'123456',
      role:'representative',
      gender:'male',
      DOB:new Date(),
      phone:'090078601',
      cnic:'123456789',
      address:'hackfest',
      archive:true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      firstName: 'therapist',
      lastName: 'mock',
      email: 'therapist@mock.com',
      password:'123456',
      role:'therapist',
      gender:'male',
      DOB:new Date(),
      phone:'090078601',
      cnic:'123456789',
      address:'hackfest',
      archive:true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {});
  }
};
