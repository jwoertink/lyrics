var { ToggleButton  } = require('sdk/ui/button/toggle');
var { Panel  } = require('sdk/panel');
var tabs = require("sdk/tabs");

tabs.on('ready', function(tab) {
  tab.attach({
    contentScriptFile: ['./lyrics.js'] 
  });
});

var button = ToggleButton({
  id: "lyrics-btn",
  label: "Scrub Lyrics",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onChange: handleChange
});

var panel = Panel({
  contentURL: "./content.html",
  onHide: handleHide
});

function handleChange(state) {
  if (state.checked) {
    panel.show({position: button});   
  }
}

function handleHide() {
  button.state('window', {checked: false});
}

function openPage(url) {
  tabs.open(url);
}
