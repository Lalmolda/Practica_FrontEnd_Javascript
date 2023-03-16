import { deleteAd, getAdbyId } from "./adDetail.js"
import { buildAdDetail } from "./adView.js"
import { decodeToken } from './../utils/decodeToken.js'

export const adDetailController = async (adDetailElement, adId, showMessage) => {
  //caputramos errores si sucedieran.
  showMessage("Cargando anuncio, espere...");
  try {
        const ad = await getAdbyId(adId)
        adDetailElement.innerHTML = buildAdDetail(ad)
        handleDeleteAdButton(adDetailElement, ad)
        showMessage("Anuncio cargado con éxito.");
  } catch (error) {
        showMessage("ERROR FATAL: "+error);
  }

  function handleDeleteAdButton(adDetailElement, ad) {
    const token = localStorage.getItem('token');
    const deleteButtonElement = adDetailElement.querySelector('#deleteAd');

    //Si no existe el token, significa que el usuario no está logeado y eliminamos el botón de eliminar el anuncio.
    //Si está logeado no lo borramos -se muestra-.
    if (!token) {
        deleteButtonElement.remove()
    } else {
      const userInfo = decodeToken(token); //hacemos decoding del token desde la función, ya que está en base64.
      if (ad.userId === userInfo.userId) {  //Si el id del usuario no es el mismo que el del creador del anuncio, no es su anuncio y no puede eliminarlo.
        // añadimos el  evento click al boton 
        deleteButtonElement.addEventListener('click', async () => {
          const answer = confirm('¿Estás seguro de que quieres borrar el anuncio?')
          if (answer) {
            //llamamos a la función deleteAd que hace un fetch.
            try{
                await deleteAd(ad.id);
                showMessage("Su anuncio se ha eliminado con éxito. Será redirigido en 5 segundos..."); 
                const redirect =  ()=> {window.location = '/';}
                setInterval(redirect, 5000);
            }catch(error){
               showMessage("ERROR FATAL: "+error); 
            }
          }
        })
      } else {
        deleteButtonElement.remove()
      }
    }
  }
}
