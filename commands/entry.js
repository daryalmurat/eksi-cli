const QueryManager = require('../lib/query-manager');
const Chalk = require('chalk');

class Entry {
  constructor() {
    this.queryManager = new QueryManager();
  }

  async getEntries(header, page) {
    const entries = await this.queryManager.fetchEntries(header, page);
    const parsed = entries.map((p) => {
      return `${Chalk.blue(p.entry)} - ${Chalk.red(p.author)}`;
    });

    return parsed.join('\n\r');
  }

  async getEntry(entryId) {
    const entry = await this.queryManager.fetchEntryById(entryId);
    const parsed = `${Chalk.blue(entry.entry)} - ${Chalk.red(entry.author)}`;
    return parsed;
  }
}

module.exports = Entry;
