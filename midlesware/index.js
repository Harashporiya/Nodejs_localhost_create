const fs = require("fs");

function logReqRes(filename) {
    return (req, res, next) => {
        fs.appendFile(
            filename,
            `\n${Date.now()}:${req.id} ${req.method}: ${req.path}\n`,
            (error, data) => {
                next();
            }
        );
    };
}

module.exports = {
    logReqRes,
};
