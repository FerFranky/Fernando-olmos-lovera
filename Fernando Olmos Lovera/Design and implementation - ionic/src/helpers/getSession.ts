import { guardarLocalStorage, obtenerLocalStorage } from "../components/utils/LocalStorage";

export const getSession = (user : any) => {
    const currentValue = obtenerLocalStorage('users')
    let isLoading = false
    if(currentValue){
        if (currentValue.length > 0) {
            currentValue.forEach((item : any) => {
                if (item.username === user.username && item.password === user.password) {
                    login(user)
                    isLoading = true
                }
            });
        }
    }
    return isLoading
}

const login = (user : any) => {
    const session = {
        user,
        isLogin: true
    }
    guardarLocalStorage('session', session)
}