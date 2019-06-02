const renderHTMLComponent = (selector, reposList, repo) => {
    let titleElement = document.querySelector(`.challenge-${selector}-title`);
    let liElement = document.createElement('li');
    let aElement = document.createElement('a');
    let spanElement = document.createElement('span');
    let textElement = document.createTextNode(repo.name);

    liElement.setAttribute("class", "challenge-repository");
    aElement.setAttribute("class", "challenge-repository-link");
    aElement.setAttribute("href", repo.html_url);
    aElement.setAttribute("target", "_blank");
    spanElement.setAttribute("class", "challenge-repository-name");
    
    titleElement.classList.remove('hidden');
    reposList.append(liElement);
    liElement.appendChild(aElement);
    aElement.appendChild(spanElement);
    spanElement.appendChild(textElement);
}

const fillRepoList = (response, selector) => {
    let reposList = document.querySelector(`#challenge-${selector}-list`);
    
    response.forEach(repo => {
        renderHTMLComponent(selector, reposList, repo);
    });
}

export { fillRepoList }