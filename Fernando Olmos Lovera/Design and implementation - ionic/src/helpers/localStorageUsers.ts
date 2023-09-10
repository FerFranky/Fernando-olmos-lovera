import { guardarLocalStorage, obtenerLocalStorage } from "../components/utils/LocalStorage"

export const createUser = (user: object) => {
    const currentValue = obtenerLocalStorage('users') || []
    guardarLocalStorage('users', [...currentValue, user])
}