//TODO CODEAR INDEX HTML Y DISEÑO del HTML DE LA PAGINA QUE MUESTRA ANUNCIOS. CREAR CSS
//TODO LISTADO DE ANUNCIOS
//TODO CARPETA ADS-LIST, CON UN ADCONTROLLER Y UNA VISTA
//TODO ICONO DE CARGAR MIENTRAS SE CARGAN LOS ANUNCIOS DESDE EL BACKEND
//TODO MOSTRAR VACIO (NO HAY ANUNCIOS), ERROR AL CARGAR LOS ANUNCIOS, EXITO CUANDO LOS ANUNCIOS SE HAN CARGADO Y ESTAN LISTOS PARA MOSTRARSE
//TODO MONTAR LOGIN Y SIGNUP CON NOTIFICATION CONTROLLER
import { adController } from "./ad-list/adController.js";
import { notificationController } from "./notification/notificationController.js";
import { userController } from "./user-actions/uController.js";


const adList = document.querySelector('.ad-list');
const userActions = document.querySelector('.userActions');
 
const showMessage = notificationController(adList);
adController(adList, showMessage);
userController(userActions);

console.log("HOLA DESDE INDEX.JS");
