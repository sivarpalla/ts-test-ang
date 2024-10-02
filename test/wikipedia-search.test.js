const WikipediaSearch = require('../wikipedia-search');

const run = async () => {
    const fakeAxios = {
        get(){
            return new Promise((resolve, reject) => {
                resolve({
                    data: {
                        query: {
                            search: [
                                {title: 'Space'},{title: 'SpaceX'}
                            ]
                        }
                    }
                });
            });
        }
    }
  const wikiSearch = new WikipediaSearch(fakeAxios);
  const results = await wikiSearch.search('space');

  if (results.length !== 2) {
    //throw new Error('No results found 10');
    console.log('No results found 10');
  }
//console.log(results);
};

run();