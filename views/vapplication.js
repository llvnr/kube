function VApplication(doc, options){

    let targetBody = document.getElementById('body');

    fetch(`./views/${options.label.toLowerCase()}.html`)
    .then(response=> response.text())
    .then(html=> {
        targetBody.innerHTML = html

        const script = document.createElement("script"),
        text = document.createTextNode(`

            // const webview = document.querySelector('webview');
            // const indicator = document.getElementById('indicator');
            // const cadreIndicator = document.getElementById('cadreIndicator');

            // const loadstop = () => {
            //         indicator.style.display = 'none'
            //         cadreIndicator.style.display = 'none'
            // }

            // webview.addEventListener('did-stop-loading', loadstop)

        `);
        
        script.appendChild(text);
        targetBody.appendChild(script);

    });

}

export default VApplication;