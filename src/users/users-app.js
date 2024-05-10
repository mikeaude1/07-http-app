import { renderAddBotton } from "./presentation/render-add-button/render-add-button";
import { renderBottons } from "./presentation/render-bottons/render-botton";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async ( element )=>{

    element.innerHTML= 'Loading...';
    await usersStore.loadNextPage();
    console.log(usersStore.getUsers());
    element.innerHTML= '';
    
    renderTable(element);
    renderBottons(element);
    renderAddBotton(element, () =>{});

}