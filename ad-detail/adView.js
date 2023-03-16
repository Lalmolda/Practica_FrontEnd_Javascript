export const buildAdDetail = (ad) => {
    //const adDate = new Date(ad.updatedAt)
    return `
        <p>${ad.nombre}</p>
        <p>${ad.descripcion}</p>
        <p>${ad.precio}</p>
        <p>${ad.compraVenta}</p>
        <img src=${ad.foto}>
        <button id="deleteAd">Borrar Anuncio</button>
    `
  }
  