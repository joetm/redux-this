'use strict';

import fetch from 'unfetch';

export default class LD {

    constructor() {
        this.endpointUrl = 'https://query.wikidata.org/sparql?query=';
    }

    fetch(item) {

        const sparql = `SELECT ?item
          WHERE
          {
            ?item wdt:P31 ${item}
          }`;

        const endpoint = this.endpointUrl + encodeURIComponent(sparql);

        return fetch(endpoint, {
            method: 'GET',
            headers: {
                'Accept': 'application/sparql-results+json'
            }
        })
        .then(r => {
            if (r.ok) {
                return r.json();
            }
            throw new Error('Failed to get data from ' + endpoint);
        })
        .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
        });

    }
}
