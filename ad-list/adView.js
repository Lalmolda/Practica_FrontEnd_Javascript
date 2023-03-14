export function buildAdView(ad) {
    console.log("LLEGO A BUILDADVIEW");
    const newAdElement = document.createElement('article');
    newAdElement.classList.add('ad');
    newAdElement.innerHTML = `
    <a href= "/">
        <p>${ad.nombre}</p>
        <p>${ad.descripcion}</p>
        <p>${ad.precio}</p>
        <p>${ad.compraVenta}</p>
        <img src=${ad.foto}>
    </a>
    `;
    console.log("SOY BUILDVIEW NEWADELEMENT: ");  

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