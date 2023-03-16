export async function getAds() {
    //pedimos los anuncios al API REST con fetch, que devuelve una promesa
    const adsUrlOK = 'http://localhost:8000/api/ads';
    
    const response = await fetch(adsUrlOK);
    const ads = await response.json(); //retorna una promesa que resuelve en un objeto javascript haciendo parsing

  
    return ads
  }