const ConfigStore = require('configstore');
const Keytar = require('keytar');

class CredentialManager {
  constructor(name) {
    this.storeName = name;
    this.configStore = new ConfigStore(this.storeName);
  }

  async saveUser(email, password) {
    this.configStore.set('email', email);
    await Keytar.setPassword(this.storeName, email, password);
  }

  async retrieveUser() {
    const email = this.configStore.get('email');
    const password = await Keytar.getPassword(this.storeName, email);
    return [username, password];
  }
}


module.exports = CredentialManager;
