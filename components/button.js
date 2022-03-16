function Button(doc, options){

    let buttonNavigationHTML = document.createElement('div')
    buttonNavigationHTML.classList.add('button__navigation')
    if(options.notification){
        let notificationHTML = document.createElement('span')
        notificationHTML.classList.add('navigation_notification')
        notificationHTML.innerText = "0"
        buttonNavigationHTML.append(notificationHTML)
    }
    let imgLogoHTML = document.createElement('img')
    imgLogoHTML.src = options.logo 
    buttonNavigationHTML.append(imgLogoHTML)
    doc.append(buttonNavigationHTML)

    buttonNavigationHTML.addEventListener('click', function() {

        let event = new CustomEvent('button-event', {

            detail: {
                action: options.action
            }

        });

        document.dispatchEvent(event)

    });

}

export default Button;