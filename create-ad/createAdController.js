import { createAd } from "./createAd.js";

export const createAdController = async (adFormElement, showMessage) => {
    adFormElement.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(adFormElement);

    const nombre = formData.get('nombre');
    const adDescription = formData.get('adDescription');
    const precio = formData.get('precio');
    const compraVenta = formData.get('compraVenta');
    const foto = formData.get('foto');


    try {
      await createAd(nombre, adDescription, precio, compraVenta, foto);
      window.location = '/';
    } catch (error) {
      alert(error)
    }
  })
}
