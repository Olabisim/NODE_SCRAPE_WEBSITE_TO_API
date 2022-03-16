

const rp = require('request-promise');
const url = 'http://nusrankings.ng/university-rankings?field_ownership_value=All&field_geopolitical_zone_value=South+West&field_state_value=All&field_type_value=All&combine=';

// cheerio 
var $ = require('cheerio');
if (typeof $ != "function") $ = require("cheerio").default;

rp (url) 
        .then ( function(html) {

                // // success!!
                // #institution_search_select #institution_search_select > option:nth-child(2)
                // console.log(html)
                // #block-milipro-content > div > div > div > table.cols-17.sticky-enabled.sticky-table > tbody > tr:nth-child(1) > td.views-field.views-field-title > a


                // console.log($('table tbody tr td:nth-of-type(1) > a', html).length);
                // console.log($('table tbody tr td:nth-of-type(1) > a', html)[0].children[0].data);


                const universities = [];

                for (let i = 0; i < 39; i++) {
                        universities.push($(`table tbody tr td:nth-of-type(1) > a`, html)[i].children[0].data);
                }


                // LWU MEANS LOWER CASE UNIVERISITIES
                const LWU = universities.map(each => (
                        each.toLowerCase().replace(/ /g,"-")
                        )
                )

                console.log( LWU)
                // console.log( universities.length)

        })
        .catch ( function(err) {

                //handle error
                console.log(err)
                
        });
