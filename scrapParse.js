const rp = require('request-promise');
const url = 'https://en.wikipedia.org/wiki/Rajendra_Prasad';


// cheerio 
var $ = require('cheerio');
if (typeof $ != "function") $ = require("cheerio").default;


rp(url)
        .then((html) => {
                console.log($('.firstHeading', html).text());
                console.log($('.bday', html).text());
        })
        .catch((err) => {
                console.log(err);
        });
        