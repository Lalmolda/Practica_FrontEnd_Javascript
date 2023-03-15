export const createAd = async (nombre, adDescription, precio, compraVenta, foto) => {
    alert("ESTOY INTENTANDO CREAR ADD");
    const newAd = {
      nombre: nombre,
      descripcion: adDescription,
      precio: precio,
      compraVenta: compraVenta,
      foto: foto
    }
  
    const token = localStorage.getItem('token');
  
    const response = await fetch('http://localhost:8000/api/ads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(newAd)
    })
  
    if (!response.ok) {
      throw new Error('Error creando tweet')
    }
 
  }
  