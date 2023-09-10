import { useEffect, useState } from "react";
import { getSession } from "../helpers/getSession";
import { useHistory } from 'react-router-dom'

const sessionSuccess = {
    isOpen: true,
    subHeader: 'Login exitoso',
    message: 'Bienvenido al sistema'
}

export const useLogin = (alertInitial: any) => {

    const history = useHistory()

    const [alert, setAlert] = useState(alertInitial)
    const [user, setUser] = useState({
        username: '',
        password: '',
    })

    const login = () => {
        const isLogin = getSession(user)

        if (isLogin) {
            setAlert(sessionSuccess)
            history.push("/home")
        } else {
            setAlert({ ...alert, isOpen: true })
        }
    }

    const setUserToLogin = ({ target }: any) => {
        const { name, value } = target

        setUser({
            ...user,
            [name]: value
        })
    }
    return {
        ...user,
        setUserToLogin,
        login,
        alert,
        setAlert
    }
}