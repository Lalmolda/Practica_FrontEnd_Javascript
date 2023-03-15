export async function createUser(email, password) {
    // construir un objeto con email y password siguiendo la interfaz definida en el endpoint /auth/register
    const user = {
      username: email,
      password: password
    }
  
    // Petición al api rest con el fetch de authentication y convertir el valor de user a JSON con stringify
    const response = await fetch('http://localhost:8000/auth/register', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
  
    // gestion de errores
    if (!response.ok) {
      throw new Error('Error al crear el usuario');
    }
  
  }
  