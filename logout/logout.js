//Simplemente elimina el token y con eso hacemos logout.
export function logOut () {
    localStorage.removeItem("token");
}