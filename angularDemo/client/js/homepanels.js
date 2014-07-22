var homePanels = angular.module("homePanels", function() {

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
	this.contents = values;

});

var contentLines = [{
	"cID":1,
	"pID":1,
	"label":
	"Agilex Technologies",
	"category":"WORK",
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