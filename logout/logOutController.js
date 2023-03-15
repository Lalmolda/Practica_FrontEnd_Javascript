import { logOut } from "./logout.js";
//Sencillo, elimina el token llamando a la función logout y deslogea, y si algo apsara informa del error.
//Al deslogear redirige al index.
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