export async function loginUser(email, password) {
  console.log("LLEGO AQUI");

    const user = {
      username: email,
      password: password
    }
  
    //fetch con metodo post que llama a la parte del api rest que hace login, transformando el email y password de string a json
    const response = await fetch('http://localhost:8000/auth/login', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
  
    //si recibimos response del API REST y no es OK, es que ha habido un error
    if (!response.ok) {
      throw new Error('Error al identificar el usuario')
    }
  
    const data = await response.json()
  
    return data.accessToken;
  
  }