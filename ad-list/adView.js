export function buildAdView(ad) {
    const newAdElement = document.createElement('article');
    newAdElement.classList.add('ad');
    newAdElement.innerHTML = `
    <a href= "/ad-detail.html?adId=${ad.id}">
        <p>${ad.nombre}</p>
        <p>${ad.descripcion}</p>
        <p>${ad.precio}</p>
        <p>${ad.compraVenta}</p>
        <img src=${ad.foto}>
    </a>
    `;

    return newAdElement;
  }

  export function buildSpinnerView() {
    return `<div class="spinner"><div></div><div></div><div></div></div>`
  }

  export function buildEmptyadList() {
    return `<p>No hay resultados disponibles</p>`;
  }

  
export function buildErrorMessage() {
    return `<p>Ha habido un error cargando los anuncios</p>`;
  }

  export function buildSuccessMessage(){
    return `<p>Anuncios cargados correctamente</p>`;
  }