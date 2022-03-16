import * as shell from "../shell.js"

function Application(doc, options){

    let cardParametresHTML = document.createElement('div')
    cardParametresHTML.classList.add('card_parametres')
    doc.append(cardParametresHTML)

    let logoHTML = document.createElement('img')
    logoHTML.src = options.logo
    cardParametresHTML.append(logoHTML)

    let titleCardHTML = document.createElement('p')
    titleCardHTML.innerText = options.title
    cardParametresHTML.append(titleCardHTML)

    let listeApp = localStorage.getItem('application')
    let checkApp = JSON.parse(listeApp).hasOwnProperty(options.title); 

    let buttonHTML

    if(checkApp){
        buttonHTML = document.createElement('button')
        buttonHTML.innerText = "Retirer"
        buttonHTML.classList.add('btn', 'btn-danger')
        cardParametresHTML.append(buttonHTML)
    } else {
        buttonHTML = document.createElement('button')
        buttonHTML.innerText = "Ajouter"
        buttonHTML.classList.add('btn', 'btn-success')
        cardParametresHTML.append(buttonHTML)
    }

    buttonHTML.addEventListener('click', function() {

        let action = buttonHTML.textContent

        let lApplication = localStorage.getItem('application')

        let appJson = JSON.parse(lApplication)
        let targetNavigation = document.getElementById('navigation');
        // console.log(appJson)

        switch (action) {
            case 'Ajouter':
                buttonHTML.innerText = "Retirer"
                buttonHTML.classList.remove('btn-success')
                buttonHTML.classList.add('btn-danger')

                appJson[options.title] = {
                    label: options.title,
                    logo: options.small_logo,
                    url: options.url
                }
                localStorage.setItem('application', JSON.stringify(appJson))

                targetNavigation.innerHTML = ""
                shell.Navigation()
                // console.log(appJson)
                break;
            case 'Retirer':
                buttonHTML.innerText = "Ajouter"
                buttonHTML.classList.remove('btn-danger')
                buttonHTML.classList.add('btn-success')
                
                delete appJson[options.title]
                localStorage.setItem('application', JSON.stringify(appJson))
                // console.log(appJson)

                targetNavigation.innerHTML = ""
                shell.Navigation()

                break;                
            default:
                break;
        }

        // console.log(lApplication)

    });

}

export default Application;