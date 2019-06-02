import './styles/main.scss';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

import { fillBoardData } from "./app/fillBoardData";
import { ajaxRequest } from "./app/ajaxRequest";
import { addAllEventListeners } from "./app/eventListeners";

ajaxRequest ("https://api.github.com/users/th-coutinho", fillBoardData);
addAllEventListeners();