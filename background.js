(function(){
  'use strict';

  chrome.omnibox.setDefaultSuggestion({
    description: '%s Search on Kickass Torrents'
  });

  chrome.omnibox.onInputEntered.addListener(function(text) {
    var url = "https://kickass.unblocked.vip/search.php?q=" + text;

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.update(tabs[0].id, {url: url});
    });
  });

})();
