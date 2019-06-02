import { ajaxRequest } from "./ajaxRequest";
import { fillRepoList } from "./fillRepoList";

const setData = (type, element_selector, data) => {
    let element  = document.querySelector(element_selector);

    switch (type) {
        case 'picture':
            element.style.backgroundImage = `url(${data}`;
            break;

        case 'href':
            element.href = data;
            break;

        case 'text':
            element.innerHTML = data;
            break;

        case 'onclick': 
            let toggleButtonStatus = () => {
                let button = document.querySelector(element_selector);
                let caret = document.querySelector(`${element_selector} .challenge-button-icon`);
                
                button.classList.toggle('active');
                caret.classList.toggle('inverted');
            }

            let togglePanelFunction = () => {
                let panel = document.querySelector(element_selector).dataset.target;
                
                panel = document.querySelector(panel);
                panel.classList.toggle('visible');

                toggleButtonStatus();
            }

            let loadContentFunction = () => {
                toggleButtonStatus();
                ajaxRequest(`https://api.github.com/users/th-coutinho/${data}`, fillRepoList, data);

                element.removeEventListener("click", loadContentFunction);
                element.addEventListener("click", togglePanelFunction);
            }

            element.addEventListener("click", loadContentFunction);
            break;
            
        default:
            break;
    }
}

const fillBoardData = (response) => {
    setData('text', '#user-name', response.name);
    setData('picture', '#user-picture', response.avatar_url);
    setData('href', '#user-profile-link', response.html_url);
    setData('text', '#user-repositories', response.public_repos);
    setData('text', '#user-followers', response.followers);
    setData('text', '#user-following', response.following);
    setData('onclick', '#show-repos-button', 'repos');
    setData('onclick', '#show-starred-button', 'starred');
}

export { fillBoardData }