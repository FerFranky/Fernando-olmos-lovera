import { borrarLocalStorage } from "../LocalStorage"

export const logout = () => {

    borrarLocalStorage('session')
    window.location.href = '/'
    return
}