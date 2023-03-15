import { notificationController } from "./../notification/notificationController.js";
import { logOutController} from "./logOutController.js";

const notifications = document.querySelector('#logOut')

const showMessage = notificationController(notifications);

logOutController(showMessage);

