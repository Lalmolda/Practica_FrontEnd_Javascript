import { getAds } from "./ads.js";
import { buildAdView, buildSpinnerView, buildEmptyadList, buildErrorMessage,buildSuccessMessage } from "./adView.js";

export async function adController(adListElement){
    let ads = [];
    adListElement.innerHTML = buildSpinnerView(); //NO hace falta una función para esconder el spinner ya que las funciones showError, ShowSucessMessage etc hacer innerhtml y lo borran.
    try {
        ads = await getAds()
        if(ads.length>0){
            showSuccessMessage(adListElement);
            drawAds(ads, adListElement);
        }else{
            showEmptyMessage(adListElement);
        }
        }catch(error){
             showError(adListElement);
        }
}

function drawAds(ads, adListElement) {
    for (const ad of ads) {
     console.log("DIBUJO AD EN BUCLE: "+ad.nombre);
      const newAdElement = buildAdView(ad);
      adListElement.appendChild(newAdElement);
    }
  }

  
function showEmptyMessage(adListElement) {
    adListElement.innerHTML = buildEmptyadList();
  }

function showError(adListElement){
    console.log("LLEGO A ERROR "+adListElement);
    adListElement.innerHTML = buildErrorMessage();
}

function showSuccessMessage(adListElement){
    adListElement.innerHTML = buildSuccessMessage();
}