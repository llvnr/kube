import Button from "./components/button.js"

function Navigation(){

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

}

export {
    Navigation
}