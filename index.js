//TODO CODEAR INDEX HTML Y DISEÑO del HTML DE LA PAGINA QUE MUESTRA ANUNCIOS. CREAR CSS
//TODO LISTADO DE ANUNCIOS
//TODO CARPETA ADS-LIST, CON UN ADCONTROLLER Y UNA VISTA
//TODO ICONO DE CARGAR MIENTRAS SE CARGAN LOS ANUNCIOS DESDE EL BACKEND
//TODO MOSTRAR VACIO (NO HAY ANUNCIOS), ERROR AL CARGAR LOS ANUNCIOS, EXITO CUANDO LOS ANUNCIOS SE HAN CARGADO Y ESTAN LISTOS PARA MOSTRARSE
import { adController } from "./ad-list/adController.js";


const adList = document.querySelector('.ad-list');
alert(adList);
 
adController(adList);

console.log("HOLA DESDE INDEX.JS");