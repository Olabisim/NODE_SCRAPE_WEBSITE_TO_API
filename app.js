const rp = require('request-promise');
const url = 'https://myschool.ng/classroom/institution-courses/abia-state-university';


// cheerio 
var $ = require('cheerio');
if (typeof $ != "function") $ = require("cheerio").default;


rp(url)
        .then((html) => {
                
                const courses = [];
                let course;

                let course_length = $(`#page-content-section > ul.vert-menu-list > li > a`, html).length

                for (let i = 1; i <= course_length; i++) {
 
                        course = $(`#page-content-section > ul.vert-menu-list > li:nth-of-type(${i}) > a`, html)[0].children[0].data;      

                        courses.push(course)
                        
                }
                
                console.log(courses)

        })
        .catch((err) => {

                console.log(err);

        });