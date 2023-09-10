import { obtenerLocalStorage } from '../components/utils/LocalStorage';
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react';
export const GuardLogin = ({ children }: any) => {


    const history = useHistory()
    const session = obtenerLocalStorage('session')
    const redirect = () => {
        setTimeout(() => {
            history.push("/login")
        }, 200);
    }

    useEffect(() => {
        if (!session?.isLogin) {
            redirect()
        }
    }, [])
    return <>{children}</>;

}