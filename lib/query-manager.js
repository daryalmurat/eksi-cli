const axios = require('axios');
const cheerio = require('cheerio');

class QueryManager {
  constructor() {
    this.options = {
      hostname: 'https://eksisozluk.com',
      headersPath: '/basliklar/m/populer',
      channelsPath: '/basliklar/m/kanal',
      yearsPath: '/basliklar/m/tarihte-bugun?year=',
      debesPath: '/m/debe',
      entryPath: '/entry/',
      entriesPath: '/',
    };
  }

  async fetchHeaders(channel) {
    if (channel) {
      return this.fetchHeadersFromUrl(this.options.hostname+
        this.options.channelsPath+'/'+channel);
    } else {
      return this.fetchHeadersFromUrl(this.options.hostname+
        this.options.headersPath);
    }
  }

  async fetchHeadersByYear(year) {
    return this.fetchHeadersFromUrl(this.options.hostname+
        this.options.yearsPath+year);
  }

  async fetchDebes() {
    return this.fetchHeadersFromUrl(this.options.hostname+
      this.options.debesPath);
  }

  async fetchHeadersFromUrl(url) {
    try {
      const response =
      await axios.get(url);
      const $ = cheerio.load(response.data);
      const data = $('li', 'ul.topic-list.partial.mobile').map(function() {
        const t = $(this).text().trim();
        return t;
      }).get();

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async fetchEntries(header, page) {
    try {
      if (!page) {
        page = 1;
      }
      const response =
      await axios.get(this.options.hostname+
        this.options.entriesPath+header);
      const actualPath = response.request.path;
      const actualResponse = await axios.get(this.options.hostname+
        actualPath+'?p='+page);
      const $ = cheerio.load(actualResponse.data);
      const entries = $('div.content').map(function() {
        return $(this).text().trim();
      });
      const authors = $('.entry-author').map(function() {
        return $(this).text().trim();
      });
      if (entries) {
        const data = [];
        for (let i=0; i<entries.length; i++) {
          data.push({'entry': entries[i], 'author': authors[i]});
        }

        return data;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async fetchEntryById(entryId) {
    try {
      const response =
        await axios.get(this.options.hostname+
          this.options.entryPath+entryId);
      const $ = cheerio.load(response.data);
      const entry = $('.content').text().trim();
      const author = $('.entry-author').text().trim();
      if (entry) {
        return {'entry': entry, 'author': author};
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = QueryManager;
