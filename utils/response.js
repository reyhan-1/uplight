exports.successResponse= function (res, data) {
    return res.status(200).json(data);
};

exports.errorResponse = function (res, errorCode, data) {
    return res.status(errorCode).json(data);
};
