const rp = require('request-promise');
const url = 'https://myschool.ng/classroom/institution-courses/ekiti-state-university';


// cheerio 
var $ = require('cheerio');
if (typeof $ != "function") $ = require("cheerio").default;


rp(url)
        .then((html) => {


                // console.log($('#page-content-section > ul > li:nth-child(1) > a', html)[0].children[0].data)
                // console.log($('#page-content-section > ul > li:nth-child(2) > a', html)[0].children[0].data)
                // console.log($('#page-content-section > ul > li:nth-child(70) > a', html)[0].children[0].data)
                // console.log($('#page-content-section > ul > li:nth-child(1) > a', html))

                
                const courses = [];

                let course;
                // 35 worked
                for (let i = 1; i < 105; i++) {

                        // if ( i !== 35 && i !== 70) {
                        course = $(`#page-content-section > ul > li:nth-child(${i}) > a`, html)[0].children[0].data;

                        if ( course instanceof String ) {

                                // courses.push($(`#page-content-section > ul > li:nth-child(${i}) > a`, html)[0].children[0].data);
                                courses.push( course );
                        } 

                }
                

                console.log(courses)


        })
        .catch((err) => {
                console.log(err);
        });