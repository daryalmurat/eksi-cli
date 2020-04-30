// const Inquirer = require('inquirer');
const CredentionalManager = require('../lib/credential-manager');

const storeName = 'eksi';
const login = async (email, password) => {
  const credentialManager = new CredentionalManager(storeName);
  await credentialManager.saveUser(email, password);
};

module.exports = login;
