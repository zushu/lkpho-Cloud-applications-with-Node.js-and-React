module.exports.getDate = function getDate() {
    var aestTime = new Date().toLocaleString("en-US");
    //return new Date(aestTime).toISOString()
    return new Date(aestTime);
}
