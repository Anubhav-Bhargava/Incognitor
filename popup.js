document.addEventListener('DOMContentLoaded', () => {

    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {

            chrome.browsingData.removeAppcache({ "since": 0 });

            chrome.browsingData.removeCache({ "since": 0 });
            chrome.browsingData.removeCookies({ "since": 0 });
            chrome.browsingData.removeDownloads({ "since": 0 });
            chrome.browsingData.removeFileSystems({ "since": 0 });
            chrome.browsingData.removeIndexedDB({ "since": 0 });
            chrome.browsingData.removeLocalStorage({ "since": 0 });
            chrome.browsingData.removePluginData({ "since": 0 });
            chrome.browsingData.removeWebSQL({ "since": 0 });

            chrome.tabs.update(tabs[0].id, {url: tabs[0].url});

            window.close();


    });

});
