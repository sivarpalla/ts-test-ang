//import WikipediaSearch = require('./wikipedia-search');
//import { WikipediaSearch } from './wikipedia-search.js';

//console.log('Hello World');

const WikipediaSearch = require('./wikipedia-search');
const axios = require('axios');

const run = async () => {
    //const wikipedia = new Wikipedia(axios.create({}));
    const wikipedia = new WikipediaSearch(axios.create({}));
    const results = await wikipedia.search('space');
    console.log(results);
    };

    run();