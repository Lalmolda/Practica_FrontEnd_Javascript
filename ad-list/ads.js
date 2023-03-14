export async function getAds() {
    const adsUrlOK = 'http://localhost:8000/api/ads';
    
    const response = await fetch(adsUrlOK);
    const ads = await response.json();

    console.log(ads);
  
    return ads
  }