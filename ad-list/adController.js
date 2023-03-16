import { getAds } from "./ads.js";
import { buildAdView, buildSpinnerView, buildEmptyadList, buildErrorMessage,buildSuccessMessage } from "./adView.js";

export async function adController(adListElement, showMessage){
    let ads = [];
    adListElement.innerHTML = buildSpinnerView(); //NO hace falta una función para esconder el spinner ya que las funciones showError, ShowSucessMessage etc hacer innerhtml y lo borran.
    try {
        ads = await getAds()
        if(ads.length>0){
            showMessage("Anuncios cargados correctamente");
            drawAds(ads, adListElement);
        }else{
            showMessage("No hay resultados disponibles");
        }
        }catch(error){
            showMessage("Ha habido un error cargando los anuncios");
        }
}

function drawAds(ads, adListElement) {
    for (const ad of ads) {
      const newAdElement = buildAdView(ad);
      adListElement.appendChild(newAdElement);
    }
  }

