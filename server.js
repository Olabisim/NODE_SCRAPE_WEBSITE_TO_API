const express = require('express'),
        app = express(),
        port = process.env.PORT || 3000;
        
const fs = require("fs"); 


// FOR THE IMPLEMENTTATION OF CORS

app.use(cors());

app.use(function (req, res, next) {
        // Website you wish to allow to connect
        res.setHeader("Access-Control-Allow-Origin", "*");
      
        // Request methods you wish to allow
        res.setHeader(
          "Access-Control-Allow-Methods",
          "GET, POST, OPTIONS, PUT, PATCH, DELETE"
        );
      
        // Request headers you wish to allow
        res.setHeader(
          "Access-Control-Allow-Headers",
          "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization"
        );
        next();
});

// SEARCH TERM How to make API calls for each value in an array

let wholeUniversities = JSON.parse(fs.readFileSync(`${__dirname}/data/fetched3.json`, "utf-8"))
        
app.get('/', (req, res) => {

        
        res.send(wholeUniversities)

})

// EKITI

app.get('/ekiti', (req, res) => {

        res.send(wholeUniversities[0])

})


// EKITI STATES UNIVERISTIES
// **************************************************************
// **************************************************************
app.get('/ekiti/ekiti-state-university', (req, res) => {

        res.send(wholeUniversities[0].EKITI[0])

})
// **************************************************************
app.get('/ekiti/federal-university-oye-ekiti', (req, res) => {

        res.send(wholeUniversities[0].EKITI[1])

})
// **************************************************************
app.get('/ekiti/afe-babalola-university', (req, res) => {

        res.send(wholeUniversities[0].EKITI[2])

})



// LAGOS

app.get('/lagos', (req, res) => {

        res.send(wholeUniversities[1])

})

// LAGOS STATES UNIVERISTIES
// **************************************************************
// **************************************************************
app.get('/lagos/lagos-state-university', (req, res) => {

        res.send(wholeUniversities[1].LAGOS[0])

})
// **************************************************************
app.get('/lagos/augustine-university', (req, res) => {

        res.send(wholeUniversities[1].LAGOS[1])

})
// **************************************************************
app.get('/lagos/caleb-university', (req, res) => {

        res.send(wholeUniversities[1].LAGOS[2])

})
// **************************************************************
app.get('/lagos/pan-atlantic-university', (req, res) => {

        res.send(wholeUniversities[1].LAGOS[3])

})






// OGUN

app.get('/ogun', (req, res) => {

        res.send(wholeUniversities[2])

})

// OGUN STATES UNIVERISTIES
// **************************************************************
// **************************************************************
app.get('/ogun/chrisland-university', (req, res) => {

        res.send(wholeUniversities[2].OGUN[0])

})
// **************************************************************
app.get('/ogun/tai-solarin-university-of-education', (req, res) => {

        res.send(wholeUniversities[2].OGUN[1])

})
// **************************************************************
app.get('/ogun/hallmark-university', (req, res) => {

        res.send(wholeUniversities[2].OGUN[2])

})
// **************************************************************
app.get('/ogun/mcpherson-university', (req, res) => {

        res.send(wholeUniversities[2].OGUN[3])

})
// **************************************************************
app.get('/ogun/crescent-university', (req, res) => {

        res.send(wholeUniversities[2].OGUN[4])

})
// **************************************************************
app.get('/ogun/covenant-university', (req, res) => {

        res.send(wholeUniversities[2].OGUN[5])

})
// **************************************************************
app.get('/ogun/babcock-university', (req, res) => {

        res.send(wholeUniversities[2].OGUN[6])

})
// **************************************************************
app.get('/ogun/bells-university-of-technology', (req, res) => {

        res.send(wholeUniversities[2].OGUN[7])

})
// **************************************************************
app.get('/ogun/federal-university-of-agriculture-abeokuta', (req, res) => {

        res.send(wholeUniversities[2].OGUN[8])

})
// **************************************************************
app.get('/ogun/mountain-top-university', (req, res) => {

        res.send(wholeUniversities[2].OGUN[9])

})
// **************************************************************
app.get('/ogun/crawford-university', (req, res) => {

        res.send(wholeUniversities[2].OGUN[10])

})









// ONDO

app.get('/ondo', (req, res) => {

        res.send(wholeUniversities[3])

})

// OGUN STATES UNIVERISTIES
// **************************************************************
// **************************************************************
app.get('/ondo/federal-university-of-technology-akure', (req, res) => {

        res.send(wholeUniversities[3].ONDO[0])

})
// **************************************************************
app.get('/ondo/adekunle-ajasin-university', (req, res) => {

        res.send(wholeUniversities[3].ONDO[1])

})
// **************************************************************
app.get('/ondo/olusegun-agagu-university-of-science-and-technology-formerly-ondo-state-university-of-science-and-te', (req, res) => {

        res.send(wholeUniversities[3].ONDO[2])

})
// **************************************************************
app.get('/ondo/achievers-university', (req, res) => {

        res.send(wholeUniversities[3].ONDO[3])

})
// **************************************************************
app.get('/ondo/elizade-university', (req, res) => {

        res.send(wholeUniversities[3].ONDO[4])

})









// OSUN

app.get('/osun', (req, res) => {

        res.send(wholeUniversities[4])

})

// OSUN STATES UNIVERISTIES
// **************************************************************
// **************************************************************
app.get('/osun/osun-state-university', (req, res) => {

        res.send(wholeUniversities[4].OSUN[0])

})
// **************************************************************
app.get('/osun/adeleke-university', (req, res) => {

        res.send(wholeUniversities[4].OSUN[1])

})
// **************************************************************
app.get('/osun/bowen-university', (req, res) => {

        res.send(wholeUniversities[4].OSUN[2])

})
// **************************************************************
app.get('/osun/kings-university', (req, res) => {

        res.send(wholeUniversities[4].OSUN[3])

})
// **************************************************************
app.get('/osun/oduduwa-university', (req, res) => {

        res.send(wholeUniversities[4].OSUN[4])

})
// **************************************************************
app.get("/osun/redeemer's-university", (req, res) => {

        res.send(wholeUniversities[4].OSUN[5])

})
// **************************************************************
app.get('/osun/obafemi-awolowo-university', (req, res) => {

        res.send(wholeUniversities[4].OSUN[6])

})










// OYO

app.get('/oyo', (req, res) => {

        res.send(wholeUniversities[5])

})

// OYO STATES UNIVERISTIES
// **************************************************************
// **************************************************************
app.get('/oyo/ladoke-akintola-university-of-technology', (req, res) => {

        res.send(wholeUniversities[5].OYO[0])

})
// **************************************************************
app.get('/oyo/lead-city-university', (req, res) => {

        res.send(wholeUniversities[5].OYO[1])

})
// **************************************************************
app.get('/oyo/koladaisi-university', (req, res) => {

        res.send(wholeUniversities[5].OYO[2])

})
// **************************************************************
app.get('/oyo/dominican-university-ibadan', (req, res) => {

        res.send(wholeUniversities[5].OYO[3])

})
// **************************************************************
app.get('/oyo/dominion-university', (req, res) => {

        res.send(wholeUniversities[5].OYO[4])

})
// **************************************************************
app.get("/oyo/university-of-ibadan", (req, res) => {

        res.send(wholeUniversities[5].OYO[5])

})







app.get('/full', (req, res) => {
        res.send(JSON.parse(fs.readFileSync(`${__dirname}/data/fetched3.json`, "utf-8")))
})

app.listen(port, () => {
        console.log('server is running on port 3000');
})
