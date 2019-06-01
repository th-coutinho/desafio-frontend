import { ajaxRequest } from "./ajaxRequest";
import { fillBoard } from "./fillBoard";

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
            element.addEventListener("click", () => {
                ajaxRequest(`https://api.github.com/users/th-coutinho/${data}`, fillBoard, data);
            });
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