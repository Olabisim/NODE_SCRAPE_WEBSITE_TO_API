

const rp = require('request-promise');
const url = 'https://myschool.ng/';

// cheerio 
var $ = require('cheerio');
if (typeof $ != "function") $ = require("cheerio").default;

rp (url) 
        .then ( function(html) {

                // // success!!
                // // console.log(html) #institution_search_select #institution_search_select > option:nth-child(2)



                const universities = [];

                for (let i = 2; i < 223; i++) {
                        universities.push($(`#institution_search_select > option:nth-child(${i})`, html)[0].attribs.value)
                }
                
                // console.log(length)
                console.log( universities)

        })
        .catch ( function(err) {

                //handle error
                console.log(err)
                
        });
