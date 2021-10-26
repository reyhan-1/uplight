let apiResponse = require("../utils/response");
const crypto = require('crypto');

exports.generateHMAC = [
    function (req, res) {
        if (req.body && req.body.data){
            const data = req.body.data
            const hash = crypto.createHmac('sha256', process.env.secretKey) //for hmac any hashing algorithms can be used. but for now, sha256 is selected. 
            .update(data)
            .digest('hex');
    
            var result = data + "&Signature" + hash
            return apiResponse.successResponse(res, result)
        }else{
            return apiResponse.errorResponse(res, 400, "Correct your request format! Format should be {data : '' }")
        }
    }
]

exports.healthcheck = [
    function (req, res) {
        return apiResponse.successResponse(res, "ok")
    }
]