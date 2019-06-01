const toggleButtonstate = (selector) => {
    let button = document.querySelector(`#show-${selector}-button`);

    button.disabled = true;
    button.onclick = null;
}

const fillBoard = (response, selector) => {
    toggleButtonstate(selector);

    let reposList = document.querySelector(`#challenge-${selector}-list`);
    
    response.forEach(element => {

        let titleElement = document.querySelector(`.challenge-${selector}-title`);
        let liElement = document.createElement('li');
        let aElement = document.createElement('a');
        let spanElement = document.createElement('span');
        let textElement = document.createTextNode(element.name);

        liElement.setAttribute("class", "challenge-repository");
        aElement.setAttribute("class", "challenge-repository-link");
        aElement.setAttribute("href", element.html_url);
        aElement.setAttribute("target", "_blank");
        spanElement.setAttribute("class", "challenge-repository-name");
        
        titleElement.classList.remove('hidden');
        reposList.append(liElement);
        liElement.appendChild(aElement);
        aElement.appendChild(spanElement);
        spanElement.appendChild(textElement);
       
    });
}

export { fillBoard }