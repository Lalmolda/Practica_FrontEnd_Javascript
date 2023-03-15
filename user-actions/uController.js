export function userController(userActionsElements) {
    const token = localStorage.getItem('token')
    //si hay token, que indica que estamos logeado,s elimina del dom los elementos con id login y signup
    if (token) {
        const loginLinkElement = userActionsElements.querySelector('#login')
        const signupLinkElement = userActionsElements.querySelector('#signup')
        loginLinkElement.remove()
        signupLinkElement.remove()
    } else {//elimina los elementos createAd y logout para que el usuario no pueda crear anuncios, y no puede logear si está sin logear...
        const createAd = userActionsElements.querySelector('#createAd')
        const logOutElement = userActionsElements.querySelector('#logout')
        createAd.remove();
        logOutElement.remove()
    }
    
}