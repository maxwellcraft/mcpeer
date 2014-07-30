var homePanels = angular.module("homePanels", ['ngAnimate'], function() {

});

var values = [{ 
	name: 'John Doe', 
	job: 'Farmer' 
	}, {
	name: 'Mario', 
	job: 'Plumber'
	}, {
	name: 'Batman', 
	job: 'Hero'	
	}
];

homePanels.controller('HomeController', function() {
	this.contents = contentLines;

});


homePanels.controller('LeftPanelController', function() {
	this.snapshots = topSnapshots;
});
homePanels.controller('PeopleController', function() {
	this.people = topSnapshots;
});

//changed first category from WORK to SKILLS for testing purposes
var contentLines = [{
	"cID":1,
	"pID":1,
	"label": "Agilex Technologies",
	"category":"SKILLS",
	"pScore":0,
	"nScore":0,
	"lastvoted":"2014-07-19T21:19:18.000Z"
},{
	"cID":2,
	"pID":1,
	"label":"MySQL",
	"category":"SKILLS",
	"pScore":0,
	"nScore":0,
	"lastvoted":"2014-07-19T21:19:18.000Z"
},{
	"cID":3,
	"pID":1,
	"label":
	"Virginia Glee Club President",
	"category":"MISCELLANEOUS",
	"pScore":0,
	"nScore":0,
	"lastvoted":"2014-07-19T21:19:18.000Z"
}];

var topSnapshots = [{
	"pID":1,
	"lastName": "Craft",
	"firstName": "Max",
	"profilePicture": "https://media.licdn.com/mpr/mpr/wc_200_200/p/2/005/072/063/37e3cea.jpg",
	"pScore":8,
	"nScore":3,
	"skills":"Front-End, Systems, Synergy",
	"jobTitle":"Virtuoso"
},{
	"pID":2,
	"lastName": "Seid",
	"firstName": "Zach",
	"profilePicture": "https://media.licdn.com/mpr/mpr/wc_200_200/p/3/005/06d/0c3/085eca5.jpg",
	"pScore":14,
	"nScore":6,
	"skills":"Back-End, Latin, Poking",
	"jobTitle":"Team Captain"
},{
	"pID":3,
	"lastName": "Jurgs",
	"firstName": "Artie",
	"profilePicture": "https://lh6.googleusercontent.com/-6XgBZit2At8/AAAAAAAAAAI/AAAAAAAAAKg/MIE7nTy9iTw/photo.jpg",
	"pScore":90,
	"nScore":0,
	"skills":"Russia",
	"jobTitle":"Russian Ambadassador"
}];

homePanels.filter("toArray", function(){
    return function(obj) {
        var result = [];
        angular.forEach(obj, function(val, key) {
            result.push(val);
        });
        return result;
    };
});