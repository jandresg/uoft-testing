var start = -1;
var loop = function() {
    start++;
    var countries = something to get an object of all countries you want to loop through
    // Highlight the country
    countries[start].highlight
}

var intervalLoop = setInterval(loop, 5000);

countries.mouseover = function() {
    clearInterval(intervalLoop);
}

if (user is idle AND loop is not already running) {
    intervalLoop = setInterval(loop, 5000);
}