import { loginUser } from './login.js';

export function loginController(loginElement, showMessage){
  //Escuchamos el evento submit y modificamos su comportamiento a nuestras necesidades
  loginElement.addEventListener('submit', (event) => {
    event.preventDefault(); //evitamos el comportamiento por defecto del boton submit y lo definimos nosotros.
    showMessage("Se está intentando logear, por favor, espere...") //GESTIÓN DE CARGA MIENTRAS SE REGISTRA EL USUARIO.
    const emailElement = loginElement.querySelector('#username');
    
    if (!isEmailValid(emailElement.value)) {
      showMessage("El email es inválido");
    } else {
      logUser(loginElement)
    }
  })

  async function logUser(loginElement) {
    const formData = new FormData(loginElement); //asignamos a la variable formdata el nuevo objeto construido con el constructor de la clase FormData, mandandole el elemento formulario del DOM
    const username = formData.get('username') //usamos el metodo get de FormData
    const password = formData.get('password')
    
    try {
      const jwt = await loginUser(username, password)
      localStorage.setItem('token', jwt)
      showMessage("Has logeado con éxito, serás redirigido en 5 segundos...");
      //Redirigimos al index.html
      const redirect =  ()=> {window.location = '/';}
      setInterval(redirect, 5000);
    } catch (error) {
        showMessage("ERROR: "+error.message);
    }
  }
}

function isEmailValid(email){
  const mailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  //llamamos al metodo test de RegExp para ver si cumple la expresion regular
  if (!mailRegExp.test(email)) {
    return false
  }

  return true
}