import { useEffect, useState } from "react"
import { getMovies } from "../helpers/getMovies"

export const useMovies = () => {
    const [movies, setMovies] = useState([])
    const [q, setQ] = useState('')

    const handleGetMovies = async () => {
        const response = await getMovies(q)
        setMovies(response)
    }

    useEffect(()=>{
        handleGetMovies()
    },[q])

    return {
        movies,
        setQ
    }
}