export const getMovies = async (q='') => {
    
    const url = `http://api.tvmaze.com/schedule/full`
    const filterUrl = `http://api.tvmaze.com/search/shows?q=${q}`
    
    const respuesta = await fetch(q === '' ? url : filterUrl)
    const data = await respuesta.json()
    
    return data
    
}