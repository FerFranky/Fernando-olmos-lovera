import { useEffect, useState } from "react";
import { getUsers } from "../helpers/getUsers";
import { createUser } from "../helpers/localStorageUsers";
import { useHistory } from 'react-router-dom'

export const useUsers = () => {
    const history = useHistory()
    const [isOpen, setIsOpen] = useState(false)
    const [user, setUser] = useState({
        name: '',
        username: '',
        password: '',
        registered: ''
    })

    const handleGetUsers = async () => {
        const response = await getUsers()
        setUser(response)
    }

    const setUserValue = ({ target }: any) => {
        const { name, value } = target

        setUser({
            ...user,
            [name]: value
        })
    }

    const onSubmit = () => {
        createUser(user)
        setIsOpen(true)
        history.push("/login")
    }
    useEffect(() => {
        if (!isOpen) {
            handleGetUsers()
        }
    }, [isOpen])
    return {
        ...user,
        setUserValue,
        onSubmit,
        isOpen,
        setIsOpen
    }
}