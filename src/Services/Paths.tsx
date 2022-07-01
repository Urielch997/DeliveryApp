
const urlApi = process.env.REACT_APP_URL_API;

export const getProductos = (page = 0,size=10) =>`${urlApi}products?page=${page}&size=${size}`;
export const getFavoritos = () => `${urlApi}User/favoritos?idUser=1&page=0&size=10`