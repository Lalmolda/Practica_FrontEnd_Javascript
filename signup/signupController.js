import { createUser } from "./signup.js";

export function signupController(signupElement, showMessage) {
  //Añadimos la escucha al evento 'submit'que emite el formulario al ser mandado y capturamos ese evento.
  //IMPORTANTE: signupElement es parte del DOM y es el objeto formulario, pasado desde el index. 
  signupElement.addEventListener('submit', async (event) => {
    console.log("LLEGO A CAPTURAR EL EVENTO");
    event.preventDefault(); //lo metemos para prevenir el comportamiento por defecto del formulario, que es el del boton submit, así lo personalizamos.

    const emailElement = signupElement.querySelector('#username');
    const passwordElement = signupElement.querySelector('#password');
    const passwordConfirmElement = signupElement.querySelector('#passwordConfirm');

    //pasamos a la función que comprueba si el email y si el pass es valido el value de los objetos dom del formulario (username, password...)
    if (isEmailValid(emailElement.value) &&
        isPasswordValid(passwordElement.value, passwordConfirmElement.value)) {
          try {
            await createUser(emailElement.value, passwordElement.value)
            signupElement.reset();
            showMessage("Usuario creado correctamente");
            //Redirigimos al index.html
            const redirect =  ()=> {window.location = '/';}
            setInterval(redirect, 5000);
          } catch (error) {
            showMessage("ERROR FATAL: No se puede contactar con el servidor: "+error.message);
          }
    }
  })


  //Función con la que comprobamos con una expresión regular si tiene formato de email
  function isEmailValid(email) {
    //creamos expresión regular
    const mailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    //llamamos al metodo test de RegExp para ver si cumple la expresion regular
    if (!mailRegExp.test(email)) {
      showMessage("El email no está bien escrito");
      return false
    }

    return true
  }

  //Comprueba que las contraseña no se repite y es la que quiere el usuario.
  function isPasswordValid(password, passwordConfirmation) {
    if (password !== passwordConfirmation) {
      showMessage("Las contraseñas no son iguales");
      return false
    }

    return true
  }
}


