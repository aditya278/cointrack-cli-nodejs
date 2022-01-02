const Configstore = require("configstore");
const pkg = require("../package.json");

class KeyManager {
  constructor() {
    this.conf = new Configstore(pkg.name);
  }

  setKey(key) {
    this.conf.set("apiKey", key);
    return key;
  }

  getKey(keyName) {
    const key = this.conf.get(keyName);
    if (!key)
      throw new Error("No API Key found - Get a key at https://nomics.com");

    return key;
  }

  deleteKey(keyName) {
    const key = this.conf.get(keyName);
    if (!key)
      throw new Error("No API Key found - Get a key at https://nomics.com");

    this.conf.delete(keyName);
    return;
  }
}

module.exports = KeyManager;
