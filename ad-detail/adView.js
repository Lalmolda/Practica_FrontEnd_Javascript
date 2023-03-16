export const buildAdDetail = (ad) => {
    return `
        <p>${ad.nombre}</p>
        <p>${ad.descripcion}</p>
        <p>${ad.precio}</p>
        <p>${ad.compraVenta}</p>
        <img src=${ad.foto}>
        <button id="deleteAd">Borrar Anuncio</button>
    `
  }
  