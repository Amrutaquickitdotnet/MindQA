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
               timestamp: new Date().toISOString() ,
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


