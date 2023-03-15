import { loginController } from "./loginController.js"
import { notificationController } from "./../notification/notificationController.js";

const loginElement = document.querySelector('#logUser')
const notifications = document.querySelector('#notifications')

const showMessage = notificationController(notifications);

loginController(loginElement, showMessage)
