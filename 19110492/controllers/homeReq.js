const {mygroup} = require('../models/models.mygroup');

function homeGetReq(req, resp) {
    resp.statusCode = 200;
    resp.setHeader('Content-Type', 'application/json');
    resp.end(JSON.stringify(mygroup));
    resp.end();
}

module.exports = {
    homeGetReq
}