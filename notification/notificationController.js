import { buildNotificationView } from "./notificationView.js";

//Esta función tiene una función dentro que puede acceder al scope superior debido a las propiedades de javascript. De esta manera accede a la variable que recibe.
export function notificationController(notificationsElement) {
  //llama a la vista, que lo que hace es devolver un parrafo html para sustituir todo dentro del elemento del dom recibido "notifications element"
  function showMessage(message) {
    notificationsElement.innerHTML = buildNotificationView(message)
    //setTimeout(() => {
      //notificationsElement.innerHTML = ''
    //}, 5000);
  }

  return showMessage;
}
