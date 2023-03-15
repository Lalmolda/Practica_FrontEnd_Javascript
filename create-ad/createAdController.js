import { createAd } from "./createAd.js";

export const createAdController = async (adFormElement, showMessage) => {
    adFormElement.addEventListener('submit', async (event) => {
    event.preventDefault();
    showMessage("Ten paciencia... se está creando tu anuncio..");

    const formData = new FormData(adFormElement);

    const nombre = formData.get('nombre');
    const adDescription = formData.get('adDescription');
    const precio = formData.get('precio');
    const compraVenta = formData.get('compraVenta');
    const foto = formData.get('foto');


    try {
      await createAd(nombre, adDescription, precio, compraVenta, foto);
      showMessage("Tu anuncio ha sido creado correctamente!! Redirigiéndote a la página principal en 5s...");
      const redirect =  ()=> {window.location = '/';}
      setInterval(redirect, 5000);
    } catch (error) {
      showMessage("ERROR: "+error);
    }
  })
}
