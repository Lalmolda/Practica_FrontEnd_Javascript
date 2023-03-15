import { signupController } from "./signupController.js";
import { notificationController } from "./../notification/notificationController.js";

const signupElement = document.querySelector('#userCreation')
const notifications = document.querySelector('#notifications')

const showMessage = notificationController(notifications);

signupController(signupElement, showMessage);
