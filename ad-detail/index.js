import { adDetailController } from "./adController.js";
import { notificationController } from "./../notification/notificationController.js";

// hemos hecho que cada anuncio este dentro de un href con un parámetro que indica su id. Aquí accedemos al parámetro id.
const params = new URLSearchParams(window.location.search)
const adId = params.get('adId');
const detailNotifications = document.querySelector('#detailNotifications');

const showMessage = notificationController(detailNotifications);

// si el parámetro id no existe, redirigimos al listado de anuncios, y mostramos el mensaje "No se puede acceder al anuncio seleccionado."
if (!adId) {
  window.location = '/'
} else {
  // crearemos un controlador donde le pasaremos dicho id
  const adDetailElement = document.querySelector('.ad-detail');

  //Mandamos el id del anuncio al controller para que pueda pedirlo al API REST y pintarlo, así como el elemento del DOM.
  adDetailController(adDetailElement, adId, showMessage);
}

