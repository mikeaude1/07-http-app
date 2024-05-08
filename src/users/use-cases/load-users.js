import { User } from "../models/users";



    export const loadUsersByPage = async ( page=1 ) => { 

        const url = `${import.meta.env.VITE_BASE_URL }/users?_page=${ page }`
        const res = await fetch(url);
        const data = await res.json();
        console.log(data.data);
        
        const users =  {...data.data};

        console.log(users);
        
    }