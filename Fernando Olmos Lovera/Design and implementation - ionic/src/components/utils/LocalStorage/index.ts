import ls from 'localstorage-slim'

export const guardarLocalStorage = (llave: string, valor: any) => {
  try {
    ls.set(llave, JSON.stringify(valor), { encrypt: true })
  } catch (error) {
    borrarLocalStorage(llave)
  }
}
export const handleCreateIfNotExists = (llave: string, valor: string) => {
  const exist = obtenerLocalStorage(llave)
  if (exist === null) {
    guardarLocalStorage(llave, valor)
  }
}

export const obtenerLocalStorage = (llave: any) => {
  try {
    const restore: any = ls.get(llave, { decrypt: true })
    const valor = JSON.parse(restore)
    return valor
  } catch (error) {
    borrarLocalStorage(llave)
  }
}

export const borrarLocalStorage = (llave: string) => {
  try {
    window.localStorage.removeItem(llave)
  } catch (error) {
    borrarLocalStorage(llave)
  }
}