function Parametres(){

    let targetBody = document.getElementById('body');

    let contentGlobalParametres = document.createElement('div')
    contentGlobalParametres.classList.add('content__global_parametres')
    contentGlobalParametres.id = "content__global_parametres"
    targetBody.append(contentGlobalParametres)

    let cardViewHTML = document.createElement('div')
    cardViewHTML.classList.add('card__views')
    cardViewHTML.id = "card__views"
    let titleHTML = document.createElement('h1')
    titleHTML.innerText = "Parametres"
    cardViewHTML.append(titleHTML)
    contentGlobalParametres.append(cardViewHTML)

    let containerViewHTML = document.createElement('div')
    containerViewHTML.classList.add('container__views')
    containerViewHTML.id = "container__views"
    contentGlobalParametres.append(containerViewHTML)

    let h2TitleHTML = document.createElement('h2')
    h2TitleHTML.innerText = "Général"
    containerViewHTML.append(h2TitleHTML)

    let cadreHTML = document.createElement('div')
    cadreHTML.classList.add('cadre__parametres')
    cadreHTML.innerHTML = `
    <div class="parentParams">
        <div class="divParam1">
            <i class="bi bi-keyboard-fill" style="font-size: 2rem;"></i> Raccourcie afficher / cacher barre d'icône :
        </div>
        <div class="divParam2">
            <b>ALT + S</b>
        </div>
    </div>
    <br>
    <div class="parentParams">
        <div class="divParam1">
            <i class="bi bi-brightness-high" style="font-size: 2rem;"></i> LightMode / DarkMode :
        </div>
        <div class="divParam2">
            <div>
                <input type="checkbox" class="checkbox" id="checkbox">
                <label for="checkbox" class="checkbox-label">
                    <i class="fas fa-moon"></i>
                    <i class="fas fa-sun"></i>
                    <span class="ball"></span>
                </label>
            </div>
        </div>
    </div>`
    containerViewHTML.append(cadreHTML)

    let h2TitleDeuxHTML = document.createElement('h2')
    h2TitleDeuxHTML.innerText = "A propos..."
    containerViewHTML.append(h2TitleDeuxHTML)

    let infosHTML = document.createElement('div')
    infosHTML.innerHTML = `
        <b>Auteur : </b> Ludovic LEVENEUR <br>
        <b>Version : </b> 1.0.0.0 <br>
    `
    containerViewHTML.append(infosHTML)

    const checkbox = document.getElementById("checkbox")
    let linkmode = document.getElementById('mode')

    if(mode == 'lightmode'){
        checkbox.checked = false
    } else if(mode == 'darkmode'){
        checkbox.checked = true
    }

    checkbox.addEventListener("change", () => {
    
        if(checkbox.checked) {
            localStorage.setItem('mode', 'darkmode')
        } else {
            localStorage.setItem('mode', 'lightmode')
        }
    
        let mode = localStorage.getItem('mode')
    
        if(mode == 'lightmode'){
            linkmode.type = 'text/css';
            linkmode.rel = 'stylesheet';
        
            //link.href = 'http://fonts.googleapis.com/css?family=Oswald&effect=neon';
            linkmode.href = 'lightmode.css'
        } else if(mode == 'darkmode'){
            linkmode.type = 'text/css';
            linkmode.rel = 'stylesheet';
        
            //link.href = 'http://fonts.googleapis.com/css?family=Oswald&effect=neon';
            linkmode.href = 'darkmode.css'
        }
    
    })

    // fetch('./views/parametres.html')
    // .then(response=> response.text())
    // .then(html=> {
    //     targetBody.innerHTML = html

    //     const script = document.createElement("script"),
    //     text = document.createTextNode(`

    //     `);
        
    //     script.appendChild(text);
    //     targetBody.appendChild(script);

    // });

}

export default Parametres;