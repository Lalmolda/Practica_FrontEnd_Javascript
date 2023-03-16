import { adDetailController } from "./adController.js";

// leer de la url el id del tweet
const params = new URLSearchParams(window.location.search)
const adId = params.get('adId');

// si el queryparam no existe, haremos una redirección al listado de tweets
if (!adId) {
  window.location = '/'
} else {
  // crearemos un controlador donde le pasaremos dicho id
  const adDetailElement = document.querySelector('.ad-detail');

  adDetailController(adDetailElement, adId)
}

