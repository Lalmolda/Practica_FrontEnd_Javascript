export const getAdbyId = async (adId) => {
    const response = await fetch(`http://localhost:8000/api/ads/${adId}`)
  
    if (!response.ok) {
      throw new Error('El anuncio solicitado no existe o le faltan datos como el ID');
    }
  
    const ad = await response.json();
  
    return ad;
  }
  
  export const deleteAd = async (adId) => {
    const token = localStorage.getItem('token')
  
    const response = await fetch(`http://localhost:8000/api/ads/${adId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`,
      }
    })
  }
  