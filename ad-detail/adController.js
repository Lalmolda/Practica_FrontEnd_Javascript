import { deleteAd, getAdbyId } from "./adDetail.js"
import { buildAdDetail } from "./adView.js"
import { decodeToken } from './../utils/decodeToken.js'

export const adDetailController = async (adDetailElement, adId) => {

  try {
        const ad = await getAdbyId(adId)
        adDetailElement.innerHTML = buildAdDetail(ad)
        handleDeleteAdButton(adDetailElement, ad)
  } catch (error) {
        alert(error)
  }

  function handleDeleteAdButton(adDetailElement, ad) {
    const token = localStorage.getItem('token');
    const deleteButtonElement = adDetailElement.querySelector('#deleteAd');

    if (!token) {
        alert("NO HAY TOKEN ME CARGO EL BOTON");
        console.log("ME CARGO DELETE BOTON");
      deleteButtonElement.remove()
    } else {
      const userInfo = decodeToken(token);
      if (ad.userId === userInfo.userId) {
        // añadir evento click al boton + enganchar con sparrest
        deleteButtonElement.addEventListener('click', async () => {
          const answer = confirm('¿Deseas borrar el anuncio? seguro??!?!?!')
          if (answer) {
            await deleteAd(ad.id);
            window.location = '/'
          }
        })
      } else {
        alert("NO ES EL USER ID ADECUADO Y NO DEBE SALIR EL BORRAR AD");
        deleteButtonElement.remove()
      }
    }
  }
}
