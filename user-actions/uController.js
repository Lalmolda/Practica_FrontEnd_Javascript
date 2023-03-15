export function userController(userActionsElements) {
    const token = localStorage.getItem('token')
    
    if (token) {
        const loginLinkElement = userActionsElements.querySelector('#login')
        const signupLinkElement = userActionsElements.querySelector('#signup')
        loginLinkElement.remove()
        signupLinkElement.remove()
    } else {
        const createAd = userActionsElements.querySelector('#createAd')
        const logOutElement = userActionsElements.querySelector('#logout')
        createAd.remove();
        logOutElement.remove()
    }
    
}