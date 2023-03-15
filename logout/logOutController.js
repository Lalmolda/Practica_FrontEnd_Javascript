import { logOut } from "./logout.js";

export function logOutController (showMessage){
    try{
        logOut();
        showMessage("Has deslogeado correctamente. Redirigiéndote a la pantalla principal en 5 segundos...");
        const redirect =  ()=> {window.location = '/';}
        setInterval(redirect, 5000);
    }catch(error){
        showMessage("ERROR FATAL: "+error.message);
        const redirect =  ()=> {window.location = '/';}
        setInterval(redirect, 5000);
    }
}