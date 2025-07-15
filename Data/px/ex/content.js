const script = document.createElement('script');
script.src = chrome.runtime.getURL('injected.js');
script.onload = function () {
	this.remove();
};
(document.head || document.documentElement).appendChild(script);

const script2 = document.createElement('script');
script2.src = chrome.runtime.getURL('record.js');
script2.onload = function () {
	this.remove();
};
(document.head || document.documentElement).appendChild(script2);
