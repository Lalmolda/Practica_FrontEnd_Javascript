import { loginUser } from './login.js';

export function loginController(loginElement, showMessage){

  loginElement.addEventListener('submit', (event) => {
    event.preventDefault();

    const emailElement = loginElement.querySelector('#username');
    
    if (!isEmailValid(emailElement.value)) {
      showMessage("El email es inválido");
    } else {
      logUser(loginElement)
    }
  })

  async function logUser(loginElement) {
    const formData = new FormData(loginElement);
    const username = formData.get('username')
    const password = formData.get('password')
    
    try {
      const jwt = await loginUser(username, password)
      localStorage.setItem('token', jwt)
      showMessage("Has logeado con éxito.");
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
