const fs = require("fs");
const rp = require("request-promise");
const url = "https://myschool.ng/classroom/institution-courses/";
const url2 =
  "http://nusrankings.ng/university-rankings?field_ownership_value=All&field_geopolitical_zone_value=South+West&field_state_value=All&field_type_value=All&combine=";
// const potusScraper = require('potusScraper')

// cheerio
var $ = require("cheerio");
if (typeof $ != "function") $ = require("cheerio").default;

const universities = [
  "achievers-university",
  "adekunle-ajasin-university",
  "adeleke-university",
  "afe-babalola-university",
  "augustine-university",
  "babcock-university",
  "bells-university-of-technology",
  "bowen-university",
  "caleb-university",
  "chrisland-university",
  "covenant-university",
  "crawford-university",
  "crescent-university",
  "dominican-university-ibadan",
  "dominion-university",
  "ekiti-state-university",
  "elizade-university",
  "federal-university-of-agriculture-abeokuta",
  "federal-university-of-technology-akure",
  "federal-university-oye-ekiti",
  "hallmark-university",
  "kings-university",
  "koladaisi-university",
  "ladoke-akintola-university-of-technology",
  "lagos-state-university",
  "lead-city-university",
  "mcpherson-university",
  "mountain-top-university",
  "obafemi-awolowo-university",
  "oduduwa-university",
  "olusegun-agagu-university-of-science-and-technology-formerly-ondo-state-university-of-science-and-te",
  "osun-state-university",
  "pan-atlantic-university",
  "redeemer's-university",
  "tai-solarin-university-of-education",
  "university-of-ibadan",
  "university-of-lagos",
];

let universities_courses = [];
let object_university;
let unique_id = 0;
// for pixking all courses

console.log(universities.length)

for (let j = 0; j < 36; j++) {
  rp(`${url}${universities[j]}`)
    .then((html) => {
      const courses = [];
      let course;
      let course_length = $(
        `#page-content-section > ul.vert-menu-list > li > a`,
        html
      ).length;

      for (let i = 1; i <= course_length; i++) {
        course = $(
          `#page-content-section > ul.vert-menu-list > li:nth-of-type(${i}) > a`,
          html
        )[0].children[0].data.replaceAll(/\n/g, '');
        
        courses.push(course);
      }

      object_university = {
        unique_id,
        university: universities[j],
        data: courses,
      };

      unique_id++;

      universities_courses.push(object_university);
    })
    .catch((err) => {
      console.log(err);
    });
}

// setTimeout(() => {
//   let i = 0;
//   universities_courses.forEach((el) => {
//     i += 1;
//     console.log(i, el["university"]);
//   });
// }, 45000);
setTimeout(() => {
  fs.writeFileSync(
    `${__dirname}/data/fetched.json`,
    JSON.stringify(universities_courses),
    "utf-8"
  );
  console.log("File has been written");
  //   console.log(universities_courses);
}, 45000);
