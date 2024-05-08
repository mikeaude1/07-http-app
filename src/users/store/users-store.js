import { loadUsersByPage } from "../use-cases/load-users";

const state ={
    currentPage:0,
    users:[],

}

const loadNextPage = async() => {
   await loadUsersByPage(state.currentPage + 1);
}

const loadPreviousPage = async() => {
    throw new Error ( ' No implements ');
}

const onUserChanged = () => {
    throw new Error ( ' No implements ');
}
const reloadPage = async() => { 
    throw new Error ( ' No implements ');
}


export default{
        loadNextPage,
        loadPreviousPage,
        onUserChanged,
        reloadPage,

        getUser: () =>[...state.users],
        getCurrentPage: () => state.currentPage,

}