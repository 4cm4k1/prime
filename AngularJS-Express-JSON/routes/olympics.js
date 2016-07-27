//  requires
var router = require('express').Router();

var taekwondoTeam = [{
    name: 'Jackie Galloway',
    origin: 'Wylie, Texas'
}, {
    name: 'Stephen Lambdin',
    origin: 'Rockwall, Texas'
}, {
    name: 'Steven Lopez',
    origin: 'Sugar Land, Texas'
}, {
    name: 'Paige McPherson',
    origin: 'Abilene, Texas'
}];

var modernPentathlonTeam = [{
    name: 'Isabella Isaksen',
    origin: 'Fayetteville, Ark.'
}, {
    name: 'Margaux Isaksen',
    origin: 'Fayetteville, Ark.'
}, {
    name: 'Nathan Schrimsher',
    origin: 'Roswell, N.M. '
}];

var canoeKayakTeam = [{
    name: 'Casey Eichfeld',
    origin: 'Drums, Pa.'
}, {
    name: 'Maggie Hogan',
    origin: 'Huntington Beach, Calif.'
}, {
    name: 'Devin McEwan',
    origin: 'Salisbury, Conn.'
}, {
    name: 'Ashley Nee',
    origin: 'Darnestown, Md.'
}, {
    name: 'Michal Smolen',
    origin: 'Gastonia, N.C.'
}];

var archeryTeam = [{
    name: 'Mackenzie Brown',
    origin: 'Flint, Texas'
}, {
    name: 'Brady Ellison',
    origin: 'Globe, Ariz.'
}, {
    name: 'Zach Garrett',
    origin: 'Wellington, Mo.'
}, {
    name: 'Jake Kaminski',
    origin: 'Gainesville, Fla.'
}];

var soccerTeam = [{
    name: 'Morgan Brian',
    origin: 'Houston, Texas'
}, {
    name: 'Crystal Dunn',
    origin: 'Rockville Centre, N.Y.'
}, {
    name: 'Whitney Engen',
    origin: 'Rolling Hills Estates, Calif.'
}, {
    name: 'Tobin Heath',
    origin: 'Basking Ridge, N.J.'
}, {
    name: 'Lindsey Horan',
    origin: 'Golden, Colo.'
}, {
    name: 'Julie Johnston',
    origin: 'Mesa, Ariz.'
}, {
    name: 'Meghan Klingenberg',
    origin: 'Pittsburgh, Pa.'
}, {
    name: 'Ali Krieger',
    origin: 'Dumfries, Va.'
}, {
    name: 'Carli Lloyd',
    origin: 'Delran, N.J.'
}, {
    name: 'Allie Long',
    origin: 'Northport, N.Y.'
}, {
    name: 'Alex Morgan',
    origin: 'Diamond Bar, Calif.'
}, {
    name: 'Alyssa Naeher',
    origin: 'Seymour, Conn.'
}, {
    name: 'Kelley O\'Hara',
    origin: 'Fayetteville, Ga.'
}, {
    name: 'Christen Press',
    origin: 'Palos Verdes Estates, Calif.'
}, {
    name: 'Mallory Pugh',
    origin: 'Highlands Ranch, Colo.'
}, {
    name: 'Megan Rapinoe',
    origin: 'Redding, Calif.'
}, {
    name: 'Becky Sauerbrunn',
    origin: 'St. Louis, Mo.'
}, {
    name: 'Hope Solo',
    origin: 'Richland, Wash.'
}];

function getRandomItemInArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

router.get('/archery', function(request, response) {
    console.log('received request');
    response.send(getRandomItemInArray(archeryTeam));
});

router.get('/canoe-kayak', function(request, response) {
    response.send(getRandomItemInArray(canoeKayakTeam));
});

router.get('/modern-pentathlon', function(request, response) {
    response.send(getRandomItemInArray(modernPentathlonTeam));
});

router.get('/soccer', function(request, response) {
    response.send(getRandomItemInArray(soccerTeam));
});

router.get('/taekwondo', function(request, response) {
    response.send(getRandomItemInArray(taekwondoTeam));
});

//  exports
module.exports = router;
