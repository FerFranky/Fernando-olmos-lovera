export const getUsers = async () => {
    const url = `https://randomuser.me/api`
    const respuesta = await fetch(url)
    const data = await respuesta.json()
    const date = new Date(data?.results[0]?.registered?.date);
    const dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
        .toISOString()
        .split("T")[0];
    const info = {
        name: `${data?.results[0]?.name?.first} ${data?.results[0]?.name?.last}`,
        username: data?.results[0]?.login?.username,
        password: data?.results[0]?.login?.password,
        registered: dateString
    }
    return info
}