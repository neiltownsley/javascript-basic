import './style.css'
import {app} from "./app";

const component = () => {
    const element = document.createElement('div');
    element.innerHTML = app();
    element.classList.add('hello');

    return element;
}

document.body.appendChild(component());