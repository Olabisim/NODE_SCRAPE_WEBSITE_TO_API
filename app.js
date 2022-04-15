const rp = require('request-promise');
const url = 'https://myschool.ng/classroom/institution-courses/';
const url2 = 'http://nusrankings.ng/university-rankings?field_ownership_value=All&field_geopolitical_zone_value=South+West&field_state_value=All&field_type_value=All&combine=';
// const potusScraper = require('potusScraper')

// cheerio 
var $ = require('cheerio');
if (typeof $ != "function") $ = require("cheerio").default;


// for generating all the universities
// const potusScraper = (url2) => {
        
//         return rp (url2) 
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


const universities = 
[
  'university-of-ibadan',
  "redeemer's-university",
  'covenant-university',
  'ladoke-akintola-university-of-technology',
  'federal-university-of-technology-akure',  
  'afe-babalola-university',
  'babcock-university',
  'mountain-top-university',
  'pan-atlantic-university',
  'lagos-state-university',
  'obafemi-awolowo-university',
  'federal-university-of-agriculture-abeokuta',
  'chrisland-university',
  'ondo-state-university-of-medical-sciences',
  'ekiti-state-university',
  'elizade-university',
  'bells-university-of-technology',
  'the-technical-university',
  'bowen-university',
  'kings-university',
  'university-of-lagos',
  'olusegun-agagu-university-of-science-and-technology-formerly-ondo-state-university-of-science-and-te',
  'osun-state-university',
  'adeleke-university',
  'lead-city-university',
  'crawford-university',
  'kola-daisi-university',
  'caleb-university',
  'dominion-university',
  'federal-university-oye-ekiti',
  'mcpherson-university',
  'tai-solarin-university-of-education',
  'augustine-university',
  'oduduwa-university',
  'adekunle-ajasin-university',
  'dominican-university',
  'achievers-university',
  'hallmark-university',
  'crescent-university'
]


let universities_courses = []
let object_university;
// for pixking all courses 

for (let j = 0; j < universities.length; j++) {
        

        rp(`${url}${universities[j]}`)
                .then((html) => {
                        
                        const courses = [];
                        let course;
                        let course_length = $(`#page-content-section > ul.vert-menu-list > li > a`, html).length

                        for (let i = 1; i <= course_length; i++) {
        
                                course = $(`#page-content-section > ul.vert-menu-list > li:nth-of-type(${i}) > a`, html)[0].children[0].data;      

                                courses.push(course)
                                
                        }

                        object_university = {
                                university: universities[j],
                                data: courses
                        }

                        universities_courses.push(object_university)

                        console.log(universities_courses)
                        // return Promise.all(
                        //         courses.map((LWU) => {
                        //                 return potusScraper(`https://en.wikipedia.org${LWU}`);
                        //         })
                        // );

                })
                // .then((courses) => {
                //         console.log(courses)
                // })
                .catch((err) => {

                        console.log(err);

                });

}