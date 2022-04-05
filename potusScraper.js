

const rp = require('request-promise');
const url = 'http://nusrankings.ng/university-rankings?field_ownership_value=All&field_geopolitical_zone_value=South+West&field_state_value=All&field_type_value=All&combine=';

// cheerio 
var $ = require('cheerio');
if (typeof $ != "function") $ = require("cheerio").default;


// const potusScraper = (url) => {
        
//         return rp (url) 
//         .then ( function(html) {

//                 const universities = [];

//                 for (let i = 0; i < 39; i++) {
//                         universities.push($(`table tbody tr td:nth-of-type(1) > a`, html)[i].children[0].data);
//                 }

//                 // LWU MEANS LOWER CASE UNIVERISITIES
//                 const LWU = universities.map(each => (
//                         each
//                         .toLowerCase()
//                         .replace(/ /g,"-")
//                         .replaceAll(',', '')
//                         .replaceAll('.', '')
//                         .replaceAll('ekiti-state-university-(formerly-university-of-ado-ekiti)', 'ekiti-state-university')
//                         .replaceAll('olusegun-agagu-university-of--science-and-technology', 'olusegun-agagu-university-of-science-and-technology-formerly-ondo-state-university-of-science-and-te')
//                         )
//                 )

//                 console.log( LWU)

//                 return {
//                         LWU: LWU
//                 }
//                 // console.log( universities.length)

//         })
//         .catch ( function(err) {

//                 //handle error
//                 console.log(err)
                
//         });
// }



// module.exports = potusScraper;









rp (url) 
        .then ( function(html) {

                const universities = [];

                for (let i = 0; i < 39; i++) {
                        universities.push($(`table tbody tr td:nth-of-type(1) > a`, html)[i].children[0].data);
                }

                // LWU MEANS LOWER CASE UNIVERISITIES
                const LWU = universities.map(each => (
                        each
                        .toLowerCase()
                        .replace(/ /g,"-")
                        .replaceAll(',', '')
                        .replaceAll('.', '')
                        .replaceAll('ekiti-state-university-(formerly-university-of-ado-ekiti)', 'ekiti-state-university')
                        .replaceAll('olusegun-agagu-university-of--science-and-technology', 'olusegun-agagu-university-of-science-and-technology-formerly-ondo-state-university-of-science-and-te')
                        )
                )

                console.log( LWU)
                // console.log( universities.length)

        })
        .catch ( function(err) {

                //handle error
                console.log(err)
                
        });
