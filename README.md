# prime_weekend_challenge_4
Notes from the first three chapters of ng-book

## The Basics of AngularJS

### How Web Pages Get to Your Browser

The Internet as a post office: when you send a letter, it gets routed to the zip code and the post office responsible for it. That post office then goes about determining which carrier to send it with so that it gets delivered to the right place.

Two types of IP addresses: ipv4 and ipv6

Typing google.com prompts the browser to ask a DNS server where google.com is, if it doesn't know, it sends it along to the next DNS server until google.com's address is found

### What Is a Browser?

Browser gets HTML text of page, creates a structure the browser "gets", lays it out and styles it visually all before displaying it to the user.

With Angular, not only do you build the structure, but you also build the user-app interaction.

### What is AngularJS

"Client-side technology, written entirely in JavaScript"

"structural framework for dynamic web apps"

Takes care of many functions that are considered essential in modern web apps (ajax, dependencies, testing, separation of logic, models, views, etc.)

### How Is It Different?

Instead of having to intimately know and manipulate the DOM (like in jQuery), Angular is embedded into and augments HTML pages with "native Model-View-Controller" capabilities

## Data Binding and Your First AngularJS Web Application

One of the most basic and impressive features: data binding

Instead of what frameworks like Ruby do (deliver a view with data in the model as it was at the time of rendering), Angular has a live view approach.

Angular constantly checks with a loop ($digest) whether data in the model has changed or become "dirty"

Makes making complex, novel features in JS in order to build live views unnecessary

$ symbol resembles jQuery, but has nothing to do with it. Signifies Angular object.

Model object = $scope object.

ng-app is telling angular what module to use, which you must define in JS

$scope is implied in the view

$timeout is a handy timeout Angular built-in dependency you can injection

Best practice is to bind variables to a key/property of a $scope object rather than to the object itself. ($scope.person.name vs. $scope.personName).
