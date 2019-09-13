function discordHack() {

  /* SERVERS */
  var guildsWrapper = document.getElementsByClassName('guildsWrapper-5TJh6A')[0]
    || document.getElementsByClassName('wrapper-1Rf91z')[0];
  var app = document.getElementsByClassName('base-3dtUhz')[0];

  var btn = document.createElement("BUTTON");
  var t = document.createTextNode("Hide Servers");
  btn.appendChild(t);
  btn.id = "hideNshow";

  btn.onclick = function() {
    if (
      guildsWrapper.style.display === 'none') {
      showServers();
    } else {
      hideServers();
    }
  }
  document.body.appendChild(btn)



  if (window.innerWidth < 700) {
    hideServers();
  }

  window.onresize = function() {
    if (window.innerWidth < 700) {
      hideServers();
    } else {
      showServers();
    }
  }

  function hideServers() {
    guildsWrapper.style.display = 'none';
    app.style.left = 0;
    btn.innerHTML = "Show Servers"
  }

  function showServers() {
    guildsWrapper.style.display = 'flex';
    app.style.left = "72px";
    btn.innerHTML = "Hide Servers"
  }

  var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 1px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)'
    , 'background-image: linear-gradient(180deg, #667eea 0%, #764ba2 100%)',
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 18px'
  ].join(';');

  console.log('%c Hide Discord Sidebar extension activated ', styles);
  // }
}

// var hider = setInterval(discordHack, 2000);
// document.addEventListener('DOMContentLoaded', discordHack, false);
// alternative to DOMContentLoaded
document.onreadystatechange = function() {
  if (document.readyState === "complete") {
    discordHack();
  }
}