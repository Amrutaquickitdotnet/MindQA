function storeApiCall(data) {
	try {
		var pageUrl = window.location.url.toISOString();
		data.pageUrl = pageUrl;
		localStorageOwn.setItem('datakeygetpathZeroCodeDummy12345678', JSON.stringify(window['dataCaptureListZeroCodeDummy12345678']));
		//const existing = JSON.parse(localStorage.getItem('datakeygetpathZeroCodeDummy12345678') || '[]');
		//existing.push(data);
		if (existing) {
			const TEN_MINUTES = 2 * 60 * 1000; // 10 minutes in milliseconds
			const now = Date.now();
			window['dataCaptureListZeroCodeDummy12345678'] = existing.filter((item) => {
				const itemTime = new Date(item.timestamp).getTime();
				return now - itemTime <= TEN_MINUTES;
			});
		}
		localStorageOwn.setItem('datakeygetpathZeroCodeDummy12345678', JSON.stringify(window['dataCaptureListZeroCodeDummy12345678']));

	} catch (err) {

	}
}


setTimeout(() => {
	window.addEventListener('click', TrackDataZeroCodeDummy12345678),
		window.addEventListener('input', TrackDataZeroCodeDummy12345678),
		window.addEventListener('change', TrackDataZeroCodeDummy12345678);
	window.addEventListener('contextmenu', TrackDataZeroCodeDummy12345678);

	window.addEventListener('beforeunload', (function () {
		isStoop || (window['dataCaptureListZeroCodeDummy12345678'].push({
			RunNumber: runTimeScriptCountDataValue,
			TestCaseNumber: 1,
			TestCaseId: '1',
			TestStepId: runTimeScriptCountDataValue,
			TestCaseDataId: '1',
			Steps: getSteps(document),
			ExecutedTime: getDateValueZeroCodeDummy12345678(),
			IsRun: !1,
			LocatorType: 'xpath',
			LocatorTypeValue: xpath,
			Action: 'PageRefresh',
			Value: window.location.href
		}));
		storeApiCall(window['dataCaptureListZeroCodeDummy12345678']);

		//localStorageOwn.setItem('datakeygetpathZeroCodeDummy12345678', JSON.stringify(window['dataCaptureListZeroCodeDummy12345678'])))
	}
	))

}, 300);

runTimeScriptCountDataValue = -1;
async function getFromStorage(key) {
	return new Promise((resolve) => {
		chrome.storage.local.get([key], (result) => {
			if (result[key]) {
				resolve(result[key]);
			} else {
				resolve("[]");
			}

		}
		);
	}
	);
}
(async () => {
	const data = await getFromStorage('dataCaptureListZeroCodeDummy12345678');
	if (data) {
		window['dataCaptureListZeroCodeDummy12345678'] = JSON.parse(data);
	} else {
		if (!window['dataCaptureListZeroCodeDummy12345678']) {
			window['dataCaptureListZeroCodeDummy12345678'] = [];
		}
	}


	const apiData = await getFromStorage('apiDataCaptureListZeroCodeDummy12345678');
	if (apiData) {
		window['apiDataCaptureListZeroCodeDummy12345678'] = JSON.parse(apiData);
	} else {
		if (!window['apiDataCaptureListZeroCodeDummy12345678']) {
			window['apiDataCaptureListZeroCodeDummy12345678'] = [];
		}
	}
}
)();

localStorageApiOwn = {
	getItem: (key) => {
		if (window['apiDataCaptureListZeroCodeDummy12345678'] && window['apiDataCaptureListZeroCodeDummy12345678'].length > 0) {
			return JSON.stringify(window['apiDataCaptureListZeroCodeDummy12345678']);
		} else {
			return JSON.stringify([]);
		}
	}
	,
	setItem: (key, value) => {
		chrome.storage.local.set({
			apiDataCaptureListZeroCodeDummy12345678: value
		}, function () {

		});

	}
}


localStorageOwn = {
	getItem: (key) => {
		if (window['dataCaptureListZeroCodeDummy12345678'] && window['dataCaptureListZeroCodeDummy12345678'].length > 0) {
			return JSON.stringify(window['dataCaptureListZeroCodeDummy12345678']);
		} else {
			return JSON.stringify([]);
		}
	}
	,
	setItem: (key, value) => {
		chrome.storage.local.set({
			dataCaptureListZeroCodeDummy12345678: value
		}, function () {

		});

	}
}


var otherEvent = []
	, isStoop = false;
function GetDataXPathZeroCodeDummy12345678(e) {
	var t = e;
	if (t && t.id)
		return '//' + t.localName + '[@id=`' + t.id + '`]';
	if (t && t.getAttribute('for'))
		return '//' + t.localName + '[@for=`' + t.getAttribute('for') + '`]';
	if (t && t.getAttribute('name'))
		return '//' + t.localName + '[@name=`' + t.getAttribute('name') + '`]';
	for (var a = []; t && Node.ELEMENT_NODE === t.nodeType;) {
		for (var o = 0, r = !1, u = t.previousSibling; u;)
			u.nodeType !== Node.DOCUMENT_TYPE_NODE && u.nodeName === t.nodeName && o++,
				u = u.previousSibling;
		for (u = t.nextSibling; u;) {
			if (u.nodeName === t.nodeName) {
				r = !0;
				break
			}
			u = u.nextSibling
		}
		var i = '';
		if (t && t.id)
			return i = t.localName + '[@id=`' + t.id + '`]',
				a.push(i),
				a.length ? '//' + a.reverse().join('/') : '';
		if (t && t.getAttribute('name'))
			return i = t.localName + '[@name=`' + t.getAttribute('name') + '`]',
				a.push(i),
				a.length ? '//' + a.reverse().join('/') : '';
		if (t && t.getAttribute('for'))
			return i = t.localName + '[@for=`' + t.getAttribute('for') + '`]',
				a.push(i),
				a.length ? '//' + a.reverse().join('/') : '';
		i = (t.prefix ? t.prefix + ':' : '') + t.localName + (o || r ? '[' + (o + 1) + ']' : ''),
			a.push(i),
			t = t.parentNode
	}
	return a.length ? '/' + a.reverse().join('/') : ''
}

function parseCustomDateFormat(str) {
	// Expected format: YYYY-MM-DD-HH-mm-ss
	const [year, month, day, hour, minute, second] = str.split('-').map(Number);
	return new Date(year, month - 1, day, hour, minute, second);
}
function getDateValueZeroCodeDummy12345678() {
	function e(e) {
		return 1 == (e += '').length ? '0' + e : e
	}
	var t = new Date;
	return t.getFullYear() + '-' + e(t.getMonth() + 1) + '-' + e(t.getDate()) + '-' + e(t.getHours()) + '-' + e(t.getMinutes()) + '-' + e(t.getSeconds())
}
function getStepsZeroCodeDummy12345678(e) {
	var t = '';
	return document.title && (t = document.title),
		t || (t = (t = window.location.pathname) ? 'home' : t.replaceAll('/', ' ').replaceAll('&', ' ').replaceAll('?', ' ')),
		t || (t = 'home'),
		e.tagName && (t = t + '-' + (e.tagName ? e.tagName.toLowerCase() : ''),
			'input' != e.tagName.toLowerCase() && 'select' != e.tagName.toLowerCase() || (e.getAttribute('name') && (t = t + '-' + e.getAttribute('name')),
				e.getAttribute('placeholder') && (t = t + '-' + e.getAttribute('placeholder')),
				e.getAttribute('id') && (t = t + '-' + e.getAttribute('id')),
				e.getAttribute('title') && (t = t + '-' + e.getAttribute('title'))),
			'label' != e.tagName.toLowerCase() && 'button' != e.tagName.toLowerCase() || (t = t + '-' + e.textContent)),
		t
}
function TrackDataZeroCodeDummy12345678(e) {
	isStoop || setTimeout((() => {
		var t = GetDataXPathZeroCodeDummy12345678(e.target)
			, a = 'sendkeks'
			, o = !0;
		if ('input' == e.type.toLowerCase() || 'change' == e.type.toLowerCase())
			if (e.target.type) {
				if ('checkbox' == e.target.type.toLowerCase() || 'radio' == e.target.type.toLowerCase() || 'button' == e.target.type.toLowerCase() || 'submit' == e.target.type.toLowerCase())
					return;
				a = 'select' == e.target.tagName.toLowerCase() ? 'selectdropdownByValue' : 'sendkeys'
			} else
				a = 'sendkeys';
		else
			'click' == e.type.toLowerCase() ? a = 'select' == e.target.tagName.toLowerCase() ? 'selectdropdownByValue' : 'click' : 'select' == e.target.tagName.toLowerCase() ? a = 'selectdropdownByValue' : (o = !1,
				a = e.type.toLowerCase());
		-1 != runTimeScriptCountDataValue && window['dataCaptureListZeroCodeDummy12345678'][runTimeScriptCountDataValue] && window['dataCaptureListZeroCodeDummy12345678'][runTimeScriptCountDataValue].LocatorTypeValue === t && window['dataCaptureListZeroCodeDummy12345678'][runTimeScriptCountDataValue].Action == a ? window['dataCaptureListZeroCodeDummy12345678'][runTimeScriptCountDataValue].Value = e.target.value ? e.target.value : '' : (runTimeScriptCountDataValue++,
			window['dataCaptureListZeroCodeDummy12345678'].push({
				RunNumber: runTimeScriptCountDataValue,
				TestCaseNumber: 1,
				TestCaseId: '1',
				TestStepId: runTimeScriptCountDataValue,
				TestCaseDataId: '1',
				Steps: getStepsZeroCodeDummy12345678(e.target),
				ExecutedTime: getDateValueZeroCodeDummy12345678(),
				IsRun: o,
				LocatorType: 'xpath',
				LocatorTypeValue: t,
				Action: a,
				Value: void 0 === e.target.value || null === e.target.value ? e.target.value : ''
			})),
			localStorageOwn.setItem('datakeygetpathZeroCodeDummy12345678', JSON.stringify(window['dataCaptureListZeroCodeDummy12345678']))
	}
	))
}



debugger;
setInterval(() => {
	var val = window.localStorage.getItem("dataCaptureListZeroCodeDummy12345678IsRecord");
	var val2 = window.localStorage.getItem("dataCaptureListZeroCodeDummy12345678IsRecordSet");
	if (val) {
		if (val == "1") {
			if (val2 == "2") {
				window.localStorage.setItem("dataCaptureListZeroCodeDummy12345678IsRecord", "2")
			} else {
				window['dataCaptureListZeroCodeDummy12345678'] = [];
				window['apiDataCaptureListZeroCodeDummy12345678'] = [];
				localStorageOwn.setItem('apiDataCaptureListZeroCodeDummy12345678', JSON.stringify(window['apiDataCaptureListZeroCodeDummy12345678']))
				localStorageOwn.setItem('dataCaptureListZeroCodeDummy12345678', JSON.stringify(window['dataCaptureListZeroCodeDummy12345678']))
				window.localStorage.setItem("dataCaptureListZeroCodeDummy12345678IsRecord", "2")
				window.localStorage.setItem("dataCaptureListZeroCodeDummy12345678IsRecordSet", "2")
			}
		}
		else if (val == "3") {
			window['dataCaptureListZeroCodeDummy12345678'] = [];
			window['apiDataCaptureListZeroCodeDummy12345678'] = [];
			localStorageOwn.setItem('apiDataCaptureListZeroCodeDummy12345678', JSON.stringify(window['apiDataCaptureListZeroCodeDummy12345678']))
			localStorageOwn.setItem('dataCaptureListZeroCodeDummy12345678', JSON.stringify(window['dataCaptureListZeroCodeDummy12345678']))
			window.localStorage.removeItem("dataCaptureListZeroCodeDummy12345678IsRecord")
			window.localStorage.removeItem("dataCaptureListZeroCodeDummy12345678IsRecordSet")
			document.querySelector("body").dataset.dataCaptureListZeroCodeDummy12345678 = "[]";
		}
		else {
			document.querySelector("body").dataset.dataCaptureListZeroCodeDummy12345678 = JSON.stringify(window['dataCaptureListZeroCodeDummy12345678']);

			document.querySelector("body").dataset.apiDataCaptureListZeroCodeDummy12345678 = JSON.stringify(window['apiDataCaptureListZeroCodeDummy12345678']);

			//
		}

	}
}
	, 1000);



const script = document.createElement('script');
script.src = chrome.runtime.getURL('injected.js');
script.onload = function () {
	this.remove();
};
(document.head || document.documentElement).appendChild(script);





(function () {

	function storeApiCall(data) {
		try {

			var pageUrl = window.location.href;
			data.pageUrl = pageUrl;
			var existing = JSON.parse(localStorage.getItem('apiDataCaptureListZeroCodeDummy12345678') || '[]');
			existing.push(data);
			if (existing) {
				const TEN_MINUTES = 10 * 60 * 1000; // 10 minutes in milliseconds
				const now = Date.now();
				existing = existing.filter((item) => {
					const itemTime = new Date(item.timestamp).getTime();
					return now - itemTime <= TEN_MINUTES;
				});
			}
			localStorage.setItem('apiDataCaptureListZeroCodeDummy12345678', JSON.stringify(existing));
		} catch (err) {

		}
	}

	// Patch fetch
	const originalFetch = window.fetch;
	window.fetch = function (resource, config = {}) {
		const method = config.method || 'GET';
		const headers = config.headers || {};
		const body = config.body || null;


		//console.log('[Fetch API Called]:', method, resource);
		storeApiCall({
			type: 'fetch',
			pageUrl: pageUrl,
			method: method,
			url: resource,
			headers: headers,
			body: body,
			timestamp: new Date().toISOString()
		});

		return originalFetch.apply(this, arguments);
	};

	// Patch XMLHttpRequest
	const originalOpen = XMLHttpRequest.prototype.open;
	const originalSend = XMLHttpRequest.prototype.send;
	const originalSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader;

	XMLHttpRequest.prototype.open = function (method, url, ...rest) {
		this._apiTracker = { method, url };
		return originalOpen.apply(this, [method, url, ...rest]);
	};

	XMLHttpRequest.prototype.setRequestHeader = function (header, value) {
		if (!this._apiTrackerHeaders) {
			this._apiTrackerHeaders = {};
		}
		this._apiTrackerHeaders[header] = value;
		return originalSetRequestHeader.apply(this, arguments);
	};

	XMLHttpRequest.prototype.send = function (body) {

		if (this._apiTracker) {
			storeApiCall({
				type: 'xhr',
				method: this._apiTracker.method,
				url: this._apiTracker.url,
				headers: JSON.stringify(this._apiTrackerHeaders || {}),
				body: JSON.stringify(body),
				timestamp: new Date().toISOString()
			});
		}
		return originalSend.apply(this, arguments);
	};
})();