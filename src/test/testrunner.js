// bootstrap - require, once loaded, kick off test run
require({
	paths: {
		'specs' : '/base/test'
	}
},
	['specs/app'], function () {
	window.__testacular__.start();
});
