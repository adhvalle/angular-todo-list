function TodoController() {
	this.list = [{
		title: 'First item',
		completed: false
	}, {
		title: 'Second item',
		completed: false
	}, {
		title: 'Third item',
		completed: false
	}];
}

angular
	.module('app')
	.controller('TodoController', TodoController);