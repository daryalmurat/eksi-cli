const QueryManager = require('../lib/query-manager');
const Chalk = require('chalk');
class Header {
  constructor() {
    this.queryManager = new QueryManager();
  }

  async getHeaders(limit, channel) {
    const headers = await this.queryManager.fetchHeaders(channel);
    if (limit) {
      return `${Chalk.blue(headers.slice(0, limit).join('\n\r'))}`;
    } else {
      return `${Chalk.blue(headers.join('\n\r'))}`;
    }
  }

  async getOldHeaders(year, limit) {
    const headers = await this.queryManager.fetchHeadersByYear(year);
    if (limit) {
      return `${Chalk.blue(headers.slice(0, limit).join('\n\r'))}`;
    } else {
      return `${Chalk.blue(headers.join('\n\r'))}`;
    }
  }

  async getDebes(limit) {
    const debes = await this.queryManager.fetchDebes();
    if (limit) {
      return `${Chalk.blue(debes.slice(0, limit).join('\n\r'))}`;
    } else {
      return `${Chalk.blue(debes.join('\n\r'))}`;
    }
  }
}

module.exports = Header;
