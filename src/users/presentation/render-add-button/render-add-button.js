import { showModal } from '../render-modal/render-modal';
import './render-add-button.css'


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const  renderAddBotton = (element, callback) => { 

    const fabButton = document.createElement('button');
    fabButton.innerText ='+';
    fabButton.classList.add('fab-button');
    fabButton.className = 'fab-button';

    element.append(fabButton);

    fabButton.addEventListener('click',() =>{
        showModal();
    })

}