const request = require('request');
const apiOptions = {    
    server: 'http://localhost:3000' 
} 

//var fs = require('fs');
//var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET travel view */ 
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways', trips }); 
}; 
const travelList = (req, res) => {
    const path = '/api/trips';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {},
    };
    console.info('>> travelController.travelList calling ' + requestOptions.url);
    request(
        requestOptions,
        (err, {statusCode}, body) => {
            if (err) {
                console.error(err);
            }
            renderTravelList(req, res, body);
        }
    );
};
module.exports = {    
    travel 
};