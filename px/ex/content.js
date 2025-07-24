const chromeData = window.chrome || window.browser || window.browser || {};
const script = document.createElement('script');
script.src = chromeData.runtime.getURL('injected.js');
script.onload = function () {
	this.remove();
};
(document.head || document.documentElement).appendChild(script);

const script2 = document.createElement('script');
script2.src = chromeData.runtime.getURL('record.js');
script2.onload = function () {
	this.remove();
};
(document.head || document.documentElement).appendChild(script2);
