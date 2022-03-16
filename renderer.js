// const { default: Button } = require("./components/button.js");
import Button from "./components/button.js"
import Applications from "./views/applications.js";
import Parametres from "./views/parametres.js";

const getControlsHeight = () => {
  const controls = document.querySelector("#controls");
  if (controls) {
    return controls.offsetHeight;
  }
  return 0;
};

function calculateLayoutSize() {
  const webview = document.querySelector("webview");
  const windowWidth = document.getElementById('body').offsetWidth
  const windowHeight = document.getElementById('body').offsetHeight
  // const windowWidth = document.documentElement.clientWidth;
  // const windowHeight = document.documentElement.clientHeight;
  const controlsHeight = getControlsHeight();
  const webviewHeight = windowHeight - controlsHeight;

  webview.style.width = windowWidth + "px";
  webview.style.height = webviewHeight + "px";
}

function loadNavigation() {

  let navigation = document.getElementById('navigation')

  let listeApp = localStorage.getItem('application')

  if(listeApp === null) localStorage.setItem('application', JSON.stringify({}))

  let application = JSON.parse(listeApp)

  // console.log(application)

  if(application != null){
      for (const [key, value] of Object.entries(application)) {
          Button(navigation, {
              action: value.label,
              logo: value.logo,
              notification: false
          });
      }
  }

  let footer = document.getElementById('footer')


  Button(footer, {
      action: 'Applications',
      logo: "https://img.icons8.com/stickers/50/000000/circled-menu.png",
      notification: false
  });

  Button(footer, {
      action: 'Parametres',
      logo: "https://img.icons8.com/stickers/50/000000/settings.png",
      notification: false
  });

}

function loadEvent() {

  document.addEventListener('button-event', function (event) {

    event.preventDefault()

    let action = event.detail.action
    let contentGlobalApp
    let contentGlobalParametres

    switch (action) { 
      case 'Applications':
        // console.log(document.querySelector("webview"))

        contentGlobalParametres = document.getElementById('content__global_parametres')

        if(contentGlobalParametres != null){
          contentGlobalParametres.style.display = "none";
        }

        if(document.querySelector("webview") != null) {
          document.querySelector("webview").style.display = "none";
        }

        contentGlobalApp = document.getElementById('content__global_app')

        if(contentGlobalApp != null){
            contentGlobalApp.style.display = null;
        } else {
          Applications()
        }

        break;
      case 'Parametres':
        // console.log(document.querySelector("webview"))

        contentGlobalApp = document.getElementById('content__global_app')

        if(contentGlobalApp != null){
          contentGlobalApp.style.display = "none";
        }

        if(document.querySelector("webview") != null) {
          document.querySelector("webview").style.display = "none";
        }

        contentGlobalParametres = document.getElementById('content__global_parametres')

        if(contentGlobalParametres != null){
          contentGlobalParametres.style.display = null;
        } else {
          Parametres()
        }

        break;
      default:
        let listeApp = localStorage.getItem('application')
        let application = JSON.parse(listeApp)

        contentGlobalParametres = document.getElementById('content__global_parametres')
        if(contentGlobalParametres != null){
          contentGlobalParametres.style.display = "none";
        }

        contentGlobalApp = document.getElementById('content__global_app')
        if(contentGlobalApp != null){
          contentGlobalApp.style.display = "none";
        }

        // console.log(document.querySelector("webview"))

        document.querySelector("webview").style.display = null;

        // console.log(document.querySelector("webview").getAttribute('data-home'))
        // console.log(application[action].url)

        if(document.querySelector("webview").getAttribute('data-home') != application[action].url){
          // console.log('url different webview.')
          document.querySelector("webview").src = application[action].url
          document.querySelector("webview").getAttribute('data-home') = application[action].url
        }

        break;
    }
    // console.log(action)

  });

}

function ShortCut() {
  document.addEventListener("keydown", function(event) {
      if (event.altKey && (event.key === 's' || event.key === 'S'))
      {
          
          if(localStorage.getItem('sidebar') === null) {
            let sidebar = document.getElementById('container__sidebar')
            sidebar.style.display = "none";
            localStorage.setItem('sidebar', true)
          } else {
            localStorage.removeItem('sidebar')
            let sidebar = document.getElementById('container__sidebar')
            sidebar.style.display = null;
          }

          event.preventDefault();
      }
  });
}


function Mode() {

  let mode = localStorage.getItem('mode')

  let linkmode = document.getElementById('mode')

  if(mode == null){
      localStorage.setItem('mode', 'darkmode')
      linkmode.type = 'text/css';
      linkmode.rel = 'stylesheet';
  
      //link.href = 'http://fonts.googleapis.com/css?family=Oswald&effect=neon';
      linkmode.href = 'darkmode.css'
  
  } else {
  
      if(mode == 'lightmode'){
          // checkbox.checked = false
          linkmode.type = 'text/css';
          linkmode.rel = 'stylesheet';
      
          //link.href = 'http://fonts.googleapis.com/css?family=Oswald&effect=neon';
          linkmode.href = 'lightmode.css'
      } else if(mode == 'darkmode'){
          // checkbox.checked = true
          linkmode.type = 'text/css';
          linkmode.rel = 'stylesheet';
      
          //link.href = 'http://fonts.googleapis.com/css?family=Oswald&effect=neon';
          linkmode.href = 'darkmode.css'
      }
  
  }
  
}

// const homeButton = () => {
//   document.querySelector("#discord").onclick = () => {
//     document.querySelector("webview").src = "https://discord.com/app";
//   };
// };

// const WhatsButton = () => {
//   document.querySelector("#whatsapp").onclick = () => {
//     document.querySelector("webview").src = "https://web.whatsapp.com/";
//   };
// }

window.onload = () => {
  loadNavigation();
  calculateLayoutSize();
  loadEvent();
  ShortCut();
  Mode();
  // homeButton();
  // WhatsButton();
};

window.onresize = calculateLayoutSize;