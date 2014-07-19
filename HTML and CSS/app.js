var app = angular.module("peer", []);

// declare a module
var myAppModule = angular.module('myApp', []);

// configure the module.
// in this example we will create a greeting filter
myAppModule.filter('greet', function() {
 return function(name) {
    return 'Hello, ' + name + '!';
  };
});

t('should add Hello to the name', function() {
  expect(element(by.binding("{{ 'World' | greet }}")).getText()).toEqual('Hello, World!');
});