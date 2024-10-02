//const axios = require('axios');

module.exports = class WikipediaSearch {
  //constructor(query) {
 //   this.axios = axios.create({
 constructor(axios) {
    //   baseURL: 'https://en.wikipedia.org/w/api.php',
    //   params: {
    //     action: 'query',
    //     format: 'json',
    //     list: 'search',
    //     utf8: 1,
    //     srsearch: query,
    //     origin: '*'
    //  });
    this.axios = axios;
    }
  

  async search(term) {
    const response = await this.axios.get(
        'https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&utf8=1&srsearch=' + term
    );
    return response.data.query.search;
  }

};
