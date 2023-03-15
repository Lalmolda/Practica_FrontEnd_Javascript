import { createAdController } from "./createAdController.js";
import { notificationController } from "./../notification/notificationController.js";

const token = localStorage.getItem('token')
const createAdFormElement = document.querySelector('#createAdForm');
const showMessage = notificationController(createAdFormElement);

if (!token) {
    showMessage("TIENES PROHIBIDO EL ACCESO HASTA QUE HAGAS LOGIN ESPABILADO!! SE TE REDIRIGIRÁ EN 3 SEGUNDOS....");
    const redirect =  ()=> {window.location = '/';}
    setInterval(redirect, 3000);
} else {
    createAdController(createAdFormElement, showMessage);
}