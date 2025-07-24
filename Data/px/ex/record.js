(function () {
	function parseCustomDateFormat(str) {
		// Expected format: YYYY-MM-DD-HH-mm-ss
		const [year, month, day, hour, minute, second] = str.split('-').map(Number);
		return new Date(year, month - 1, day, hour, minute, second);
	}
	function storeApiCall(dataArray) {
		try {


			////var pageUrl = window.location.url.toISOString();
			////data.pageUrl = pageUrl;
			//const existing = JSON.parse(localStorage.getItem('apiDataCaptureListZeroCodeDummy12345678') || '[]');
			//existing.push(data);
			if (dataArray) {
				const TEN_MINUTES_MS = 2 * 1000;
				const now = Date.now();

				dataArray = dataArray.filter(item => {
					const itemDate = parseCustomDateFormat(item.ExecutedTime);
					return now - itemDate.getTime() <= TEN_MINUTES_MS;
				});
				localStorage.setItem('datakeygetpathZeroCodeDummy12345678', JSON.stringify(dataArray));
				//console.log("Data stored in localStorage:", JSON.stringify(dataArray));
			}
		} catch (err) {

		}
	}
	var otherEvent = [];
	var isStoop = false;
	function GetDataXPathZeroCodeDummy12345678(element) {
		let a = element;

		// Special case for span or li: use text() selector


		if (a && a.id) {
			return `//${a.localName}[@id='${a.id}']`;
		}

		if (a && a.getAttribute('for')) {
			return `//${a.localName}[@for='${a.getAttribute('for')}']`;
		}

		//if (a && a.getAttribute('role')) {
		//	return `//${a.localName}[@role='${a.getAttribute('role')}']`;
		//}

		if (a && a.getAttribute('name')) {
			return `//${a.localName}[@name='${a.getAttribute('name')}']`;
		}

		let pathSegments = [];

		while (a && a.nodeType === Node.ELEMENT_NODE) {
			let index = 0;
			let hasFollowingSiblings = false;
			let sibling = a.previousSibling;

			// Count how many siblings with the same name come before
			while (sibling) {
				if (sibling.nodeType !== Node.DOCUMENT_TYPE_NODE && sibling.nodeName === a.nodeName) {
					index++;
				}
				sibling = sibling.previousSibling;
			}

			// Check if there are siblings with the same name after
			sibling = a.nextSibling;
			while (sibling) {
				if (sibling.nodeName === a.nodeName) {
					hasFollowingSiblings = true;
					break;
				}
				sibling = sibling.nextSibling;
			}

			let segment = '';

			if (a.id) {
				segment = `${a.localName}[@id='${a.id}']`;
				pathSegments.push(segment);
				break;
			}

			if (a.getAttribute('name')) {
				segment = `${a.localName}[@name='${a.getAttribute('name')}']`;
				pathSegments.push(segment);
				break;
			}

			if (a.getAttribute('for')) {
				segment = `${a.localName}[@for='${a.getAttribute('for')}']`;
				pathSegments.push(segment);
				break;
			}

			//if (a && (a.localName.toLowerCase() === 'span' || a.localName.toLowerCase() === 'li') && a.textContent.trim()) {
			//	segment= `${a.localName}[text()='${a.textContent.trim()}']`;
			//	pathSegments.push(segment);
			//	break;
			//}

			//if (a.getAttribute('role')) {
			//	segment = `${a.localName}[@role='${a.getAttribute('role')}']`;
			//	pathSegments.push(segment);
			//	break;
			//}

			segment = (a.prefix ? `${a.prefix}:` : '') + a.localName;
			if (index || hasFollowingSiblings) {
				segment += `[${index + 1}]`;
			}

			pathSegments.push(segment);
			a = a.parentNode;
		}

		return pathSegments.length ? '/' + pathSegments.reverse().join('/') : '';
	}
	function GetDataXPathZeroCodeDummy12345678NoId(element) {
		let a = element;

		// Special case for span or li: use text() selector
		//if (a && (a.localName === 'span' || a.localName === 'li') && a.textContent.trim()) {
		//	return `//${a.localName}[text()='${a.textContent.trim()}']`;
		//}

		if (a && a.xidx) {
			//return `//${a.localName}[@id='${a.id}']`;
		}

		if (a && a.getAttribute('for')) {
			return `//${a.localName}[@for='${a.getAttribute('for')}']`;
		}

		//if (a && a.getattribute('role')) {
		//	return `//${a.localname}[@role='${a.getattribute('role')}']`;
		//}

		if (a && a.getAttribute('name')) {
			return `//${a.localName}[@name='${a.getAttribute('name')}']`;
		}

		let pathSegments = [];

		while (a && a.nodeType === Node.ELEMENT_NODE) {
			let index = 0;
			let hasFollowingSiblings = false;
			let sibling = a.previousSibling;

			// Count how many siblings with the same name come before
			while (sibling) {
				if (sibling.nodeType !== Node.DOCUMENT_TYPE_NODE && sibling.nodeName === a.nodeName) {
					index++;
				}
				sibling = sibling.previousSibling;
			}

			// Check if there are siblings with the same name after
			sibling = a.nextSibling;
			while (sibling) {
				if (sibling.nodeName === a.nodeName) {
					hasFollowingSiblings = true;
					break;
				}
				sibling = sibling.nextSibling;
			}

			let segment = '';

			if (a.xidx) {
				segment = `${a.localName}[@id='${a.id}']`;
				pathSegments.push(segment);
				break;
			}

			if (a && a.getAttribute('name')) {
				segment = `${a.localName}[@name='${a.getAttribute('name')}']`;
				pathSegments.push(segment);
				break;
			}

			if (a && a.getAttribute('for')) {
				segment = `${a.localName}[@for='${a.getAttribute('for')}']`;
				pathSegments.push(segment);
				break;
			}

			//if (a && a.getAttribute('role')) {
			//	segment = `${a.localName}[@role='${a.getAttribute('role')}']`;
			//	pathSegments.push(segment);
			//	break;
			//}



			//if (a && (a.localName === 'span' || a.localName === 'li') && a.textContent.trim()) {
			//	segment = `/${a.localName}[text()='${a.textContent.trim()}']`;
			//	pathSegments.push(segment);
			//	break;
			//}

			segment = (a.prefix ? `${a.prefix}:` : '') + a.localName;
			if (index || hasFollowingSiblings) {
				segment += `[${index + 1}]`;
			}

			pathSegments.push(segment);
			a = a.parentNode;
		}

		return pathSegments.length ? '/' + pathSegments.reverse().join('/') : '';
	}
	function getDateValueZeroCodeDummy12345678() {

		function twoDigit(val) {
			val = val + "";
			if (val.length == 1) {
				return "0" + val;
			}

			return val;
		}
		var dateVal = new Date()
		return dateVal.getFullYear() + "-" + twoDigit(dateVal.getMonth() + 1) + "-" + twoDigit(dateVal.getDate()) + "-" + twoDigit(dateVal.getHours()) + "-" + twoDigit(dateVal.getMinutes()) + "-" + twoDigit(dateVal.getSeconds());
	}
	function getStepsZeroCodeDummy12345678(ele, type) {
		var steps = "";
		var page = "";
		if (document.title) {
			steps = document.title;
		}
		if (!steps) {
			steps = window.location.pathname;
			if (!steps) {
				steps = steps.replaceAll("/", " ").replaceAll("&", " ").replaceAll("?", " ")
			} else {
				steps = "home";
			}
		}
		if (!steps) {
			steps = "home";
		}
		page = steps;
		if (ele.tagName) {
			steps = steps + "-" + (ele.tagName ? ele.tagName.toLowerCase() : "");
			var name = "";
			//	if (ele.tagName.toLowerCase() == "input" || ele.tagName.toLowerCase() == "select") {
			if (ele.getAttribute("name")) {
				steps = steps + "-" + ele.getAttribute("name");
				name = ele.getAttribute("name");
			}
			else if (ele.getAttribute("placeholder")) {
				steps = steps + "-" + ele.getAttribute("placeholder");
				name = ele.getAttribute("placeholder");
			}
			else if (ele.getAttribute("id")) {
				steps = steps + "-" + ele.getAttribute("id");
				name = ele.getAttribute("id")
			}
			else if (ele.getAttribute("title")) {
				steps = steps + "-" + ele.getAttribute("title");
				name = ele.getAttribute("title")
			}
			//}	
			if (name != "") {
				if (type == "sendkeys") {
					return "User should send keys to " + name + ", for " + page;
				} else if (type == "click") {
					return "User should click on " + name + ", for " + page;
				}
			}
			else if (type == "click") {
				var text = "";
				if (ele.textContent) {
					text = ele.textContent.trim().substr(0, 20);
				}

				return "User should click on " + text + ", for " + page;
			}
			if (ele.tagName.toLowerCase() == "label" || ele.tagName.toLowerCase() == "button") {


				steps = steps + "-" + ele.textContent;
			}
		}
		return steps;
	}

	function TrackDataZeroCodeDummy12345678(ele) {
		if (isStoop) {
			return;
		}
		setTimeout(() => {
			var xpath = GetDataXPathZeroCodeDummy12345678(ele.target);
			var xpathWithoutId = GetDataXPathZeroCodeDummy12345678NoId(ele.target);
			if (xpath && !xpath.startsWith("//")) {
				xpath = "/" + xpath;
			}
			if (xpathWithoutId && !xpathWithoutId.startsWith("//")) {
				xpathWithoutId = "/" + xpathWithoutId;
			}
			var type = "sendkeys"
			var isRun = true;
			if (ele.type.toLowerCase() == "input" || ele.type.toLowerCase() == "change") {
				if (!ele.target.type) {
					type = "sendkeys"
				} else if (ele.target.type.toLowerCase() == 'checkbox' || ele.target.type.toLowerCase() == 'radio' || ele.target.type.toLowerCase() == 'button' || ele.target.type.toLowerCase() == 'submit') {
					return;
				} else if (ele.target.tagName.toLowerCase() == 'select') {
					type = "selectdropdownByValue";
				} else {
					type = "sendkeys"
				}

			} else if (ele.type.toLowerCase() == "click" || ele.type.toLowerCase() == "mousedown") {

				if (ele.target.tagName.toLowerCase() == 'select') {
					type = "selectdropdownByValue";
				} else {
					type = "click";
				}

			} else {
				if (ele.target.tagName.toLowerCase() == 'select') {
					type = "selectdropdownByValue";
				} else {
					isRun = false;
					type = ele.type.toLowerCase()
				}

			}

			if (runTimeScriptCountDataValue != -1 && dataCaptureListZeroCodeDummy12345678[runTimeScriptCountDataValue] && dataCaptureListZeroCodeDummy12345678[runTimeScriptCountDataValue].LocatorTypeValue === xpath && dataCaptureListZeroCodeDummy12345678[runTimeScriptCountDataValue].Action == type) {
				dataCaptureListZeroCodeDummy12345678[runTimeScriptCountDataValue].Value = ele.target.value ? ele.target.value : "";
				dataCaptureListZeroCodeDummy12345678[runTimeScriptCountDataValue].ExecutedTime = getDateValueZeroCodeDummy12345678();
			}
			else if (type == "click" && dataCaptureListZeroCodeDummy12345678[runTimeScriptCountDataValue] && dataCaptureListZeroCodeDummy12345678[runTimeScriptCountDataValue].LocatorTypeValue === xpath && dataCaptureListZeroCodeDummy12345678[runTimeScriptCountDataValue].Action == type) {
				dataCaptureListZeroCodeDummy12345678[runTimeScriptCountDataValue].Value = ele.target.value ? ele.target.value : "";
				dataCaptureListZeroCodeDummy12345678[runTimeScriptCountDataValue].ExecutedTime = getDateValueZeroCodeDummy12345678();
			} else {


				runTimeScriptCountDataValue++;
				dataCaptureListZeroCodeDummy12345678.push(
					{
						"RunNumber": runTimeScriptCountDataValue,
						"TestCaseNumber": 1,
						"TestCaseId": "1",
						"TestStepId": runTimeScriptCountDataValue,
						"TestCaseDataId": "1",
						"Steps": getStepsZeroCodeDummy12345678(ele.target, type),// +":-:{" + xpathWithoutId+"}",
						"ExecutedTime": getDateValueZeroCodeDummy12345678(),
						"IsRun": isRun,
						"LocatorType": "xpath",
						"LocatorTypeValue": xpath,
						"LocatorTypeNotIdValue": xpathWithoutId,
						"Action": type,
						"Value": ele.target.value ? ele.target.value : (ele.target.innerText ? ele.target.innerText.substr(0, 100) : "")
					}
				)
			}




			storeApiCall(dataCaptureListZeroCodeDummy12345678);
		})

	}
	if (!window["dataCaptureListZeroCodeDummy12345678"]) {
		if (localStorage.getItem("datakeygetpathZeroCodeDummy12345678")) {
			window["dataCaptureListZeroCodeDummy12345678"] = JSON.parse(localStorage.getItem("datakeygetpathZeroCodeDummy12345678"));
			var runTimeScriptCountDataValue = window["dataCaptureListZeroCodeDummy12345678"].length - 1;
			runTimeScriptCountDataValue++;
			dataCaptureListZeroCodeDummy12345678.push(
				{
					"RunNumber": runTimeScriptCountDataValue,
					"TestCaseNumber": 1,
					"TestCaseId": "1",
					"TestStepId": runTimeScriptCountDataValue,
					"TestCaseDataId": "1",
					"Steps": "Navigate to the URL in the browser",
					"ExecutedTime": getDateValueZeroCodeDummy12345678(),
					"IsRun": false,
					"LocatorType": "NA",
					"LocatorTypeValue": "NA",
					"LocatorTypeIdValue": "NA",
					"Action": "enterurl",
					"Value": window.location.href
				})
		} else {
			window["dataCaptureListZeroCodeDummy12345678"] = window["dataCaptureListZeroCodeDummy12345678"] || [];
			var runTimeScriptCountDataValue = -1;
		}
		var btns = document.querySelectorAll("button,[type=submit]")
		for (var i = 0; i < btns.length; i++) {
			btns[i].addEventListener('click', TrackDataZeroCodeDummy12345678)
		}
		if (otherEvent.length > 0) {
			for (var i = 0; i < otherEvent.length; i++) {
				window.addEventListener(otherEvent[i], TrackDataZeroCodeDummy12345678)
			}
		} else {

			//document.addEventListener("click", TrackDataZeroCodeDummy12345678);
			//window.addEventListener("submit", TrackDataZeroCodeDummy12345678)
			window.addEventListener("click", TrackDataZeroCodeDummy12345678)
			window.addEventListener("input", TrackDataZeroCodeDummy12345678)
			//window.addEventListener("change", TrackDataZeroCodeDummy12345678)
			window.addEventListener("contextmenu", TrackDataZeroCodeDummy12345678)
		}


		window.addEventListener("beforeunload", function () {
			if (isStoop) {
				return;
			}
			dataCaptureListZeroCodeDummy12345678.push(
				{
					"RunNumber": runTimeScriptCountDataValue,
					"TestCaseNumber": 1,
					"TestCaseId": "1",
					"TestStepId": runTimeScriptCountDataValue,
					"TestCaseDataId": "1",
					"Steps": getSteps(document),
					"ExecutedTime": getDateValueZeroCodeDummy12345678(),
					"IsRun": false,
					"LocatorType": "xpath",
					"LocatorTypeValue": xpathWithoutId,
					"LocatorTypeIdValue": xpath,
					"Action": "PageRefresh",
					"Value": window.location.href
				})
			storeApiCall(dataCaptureListZeroCodeDummy12345678);
		})
	}

	setInterval(() => {
		storeApiCall(dataCaptureListZeroCodeDummy12345678)
	}, 500);

	getDateValueZeroCodeDummy12345678();


	const observer = new MutationObserver(mutations => {
		mutations.forEach(mutation => {
			mutation.addedNodes.forEach(node => {
				if (node.nodeType === 1) { // 1 = Element node
					const element = /** @type {HTMLElement} */ (node); // only for editors like VSCode
					element.addEventListener('click', TrackDataZeroCodeDummy12345678);

					const children = node.querySelectorAll('*');
					children.forEach(child => {
						child.addEventListener('mousedown', TrackDataZeroCodeDummy12345678);
						child.addEventListener('input', TrackDataZeroCodeDummy12345678);

					});
				}
			});
		});
	});

	try {
		observer.observe(document.body, {
			childList: true,
			subtree: true
		});
	} catch {

	}



})();



(function () {
	const originalConsole = {
		log: console.log,
		info: console.info,
		warn: console.warn,
		error: console.error,
		debug: console.debug
	};

	const logHistory = [];

	function storeApiCall(data) {
		try {

			var pageUrl = window.location.href;
			data.pageUrl = pageUrl;
			var existing = JSON.parse(localStorage.getItem('consoleDataCaptureListZeroCodeDummy12345678') || '[]');
			existing.push(data);
			if (existing) {
				const TEN_MINUTES = 2 * 60 * 1000; // 10 minutes in milliseconds
				const now = Date.now();
				existing = existing.filter((item) => {
					const itemTime = new Date(item.timestamp).getTime();
					return now - itemTime <= TEN_MINUTES;
				});
			}
			localStorage.setItem('consoleDataCaptureListZeroCodeDummy12345678', JSON.stringify(existing));
		} catch (err) {

		}
	}



	function logInterceptor(type, args) {
		const message = {
			type,
			timestamp: new Date().toISOString(),
			Text: JSON.stringify(args)
		};
		storeApiCall(message);
		try {
			if (originalConsole[type] && type != "error") {
				//originalConsole[type].apply(console, args);
			}

		} catch {

		}

	}

	['log', 'info', 'warn', 'error', 'debug'].forEach(function (method) {
		console[method] = function () {
			logInterceptor(method, arguments);
		};
	});

	// Capture uncaught errors
	window.onerror = function (message, source, lineno, colno, error) {
		console.error("Uncaught Exception:", {
			message,
			source,
			lineno,
			colno,
			stack: error?.stack || "No stack"
		});
	};

	// Capture unhandled promise rejections
	window.addEventListener("unhandledrejection", function (event) {
		console.error("Unhandled Promise Rejection:", {
			reason: event.reason,
			stack: event.reason?.stack || "No stack"
		});
	});
})();


var requestData = [];

(function (global) {
	if (global.__NETWORK_TRACKER_PRO__) return;
	global.__NETWORK_TRACKER_PRO__ = true;

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

	function logRequest(type, info) {
		storeApiCall({
			type: type,
			method: info.method,
			url: info.url,
			headers: JSON.stringify(info.headers),
			body: info.body,
			timestamp: new Date().toISOString(),
			duration: info.duration,
			status: info.status,
			response: JSON.stringify(info.response),
			error: JSON.stringify(info.error)
		});

	}

	// ========== XMLHttpRequest Tracking ==========
	const originalXHROpen = XMLHttpRequest.prototype.open;
	const originalXHRSend = XMLHttpRequest.prototype.send;
	const originalXHRSetRequestHeader = XMLHttpRequest.prototype.setRequestHeader;

	XMLHttpRequest.prototype.open = function (method, url, async, user, password) {
		this._trackInfo = {
			method,
			url,
			headers: {},
			startTime: Date.now()
		};
		return originalXHROpen.apply(this, arguments);
	};

	XMLHttpRequest.prototype.setRequestHeader = function (header, value) {
		if (this._trackInfo) {
			this._trackInfo.headers[header] = value;
		}
		return originalXHRSetRequestHeader.apply(this, arguments);
	};

	XMLHttpRequest.prototype.send = function (body) {
		if (this._trackInfo) {
			this._trackInfo.body = body;
		}

		this.addEventListener('loadend', function () {
			const duration = Date.now() - this._trackInfo.startTime;
			const info = {
				...this._trackInfo,
				status: this.status,
				duration,
				response: this.responseText
			};
			logRequest('XHR', info);
		});

		this.addEventListener('error', function () {
			const info = {
				...this._trackInfo,
				error: 'Network Error'
			};
			logRequest('XHR', info);
		});

		return originalXHRSend.apply(this, arguments);
	};

	// ========== fetch Tracking ==========
	const originalFetch = global.fetch;

	global.fetch = new Proxy(originalFetch, {
		apply: function (target, thisArg, args) {
			const [resource, config = {}] = args;
			const info = {
				method: config.method || 'GET',
				url: (typeof resource === 'string') ? resource : resource.url,
				headers: config.headers || {},
				body: config.body,
				startTime: Date.now()
			};

			return Reflect.apply(target, thisArg, args)
				.then(response => {
					const clonedResponse = response.clone();
					return clonedResponse.text().then(data => {
						const duration = Date.now() - info.startTime;
						logRequest('fetch', {
							...info,
							status: response.status,
							duration,
							response: data
						});
						return response;
					});
				})
				.catch(error => {
					logRequest('fetch', {
						...info,
						error: error.message || error
					});
					throw error;
				});
		}
	});

})(window);









