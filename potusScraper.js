const rp = require('request-promise');
const url = 'https://en.wikipedia.org/wiki/List_of_presidents_of_India';

// cheerio 
var $ = require('cheerio');
if (typeof $ != "function") $ = require("cheerio").default;

rp (url) 
        .then ( function(html) {
                // success!!
                // console.log(html)

                const presidentUrls = [];

                const length = $('div.mw-parser-output > a > img', html).length;

                for (let i = 0; i < 18; i++) {
                        presidentUrls.push($('div.mw-parser-output > a > img', html))
                }
                console.log( presidentUrls)
        })
        .catch ( function(err) {

                //handle error
                console.log(err)
                
        });