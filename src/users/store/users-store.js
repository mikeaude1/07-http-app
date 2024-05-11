import { User } from "../models/users";
import { loadUsersByPage } from "../use-cases/load-users";

const state ={
    currentPage:0,
    users:[],

}

const loadNextPage = async() => {
   const users = await loadUsersByPage(state.currentPage + 1);
   if(users.length === 0) return;
   state.currentPage +=1;
   state.users= users;
   console.log('state',state);
   
}

const loadPreviousPage = async() => {
    const users = await loadUsersByPage(state.currentPage - 1);
    if(users.length === 0) return;
    state.currentPage -=1;
    state.users= users;

    console.log('state',state.users); 
    return state.users
}

/**
 * 
 * @param {User} user 
 */
const onUserChanged = (updatedUser	) => {
    let wasFound =false;
    state.users= state.users.map(user=>{
        if(user.id === updatedUser.id){
            wasFound=true;
            return updatedUser;
        }
        return user;
    });
    if(state.users.length < 10 && !wasFound){
        state.users.push( updatedUser );
    }
}
const reloadPage = async() => { 
    throw new Error ( ' No implements ');
}


export default{
        loadNextPage,
        loadPreviousPage,
        onUserChanged,
        reloadPage,

        getUsers: () =>[...state.users],
        getCurrentPage: () => state.currentPage,
        
        
    }