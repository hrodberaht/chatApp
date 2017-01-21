var request = require("request");
var apiKey = require('../../../config/default').apiKey;


module.exports = function(req, res){
    var id = 8769805;
    var param = {"order_id": id};
    var requestOptions = {
        url : "https://api.baselinker.com/connector.php",
        method : "POST",
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'User-Agent': 'nodejs'
         },
            form: { "token": apiKey,
                    "method": "getOrders",
                    "parameters": JSON.stringify(param),
        },
        
        //json:  {}
    };
    
    request(requestOptions, function(err, response, body) {
        if (err) {
            console.log(err);
        } else if (response.statusCode === 200) {
            var data = JSON.parse(body).orders;
            //console.log(param);
            res.render("welcome",{title: data[0].products});
        } else {
            console.log(response.statusCode);
        }
    });
    
     
    
};