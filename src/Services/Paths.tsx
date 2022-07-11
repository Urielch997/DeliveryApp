
const urlApi = process.env.REACT_APP_URL_API;

export const getProductos = (page = 0,size=10) =>`${urlApi}products?page=${page}&size=${size}&idUser=1`;
export const getFavoritos = () => `${urlApi}User/favoritos?idUser=1&page=0&size=10`;
export const SaveFavoritos = () => `${urlApi}User/favoritos`;
export const DeleteFavoritos = (id:number) => `${urlApi}User/favoritos?idFavorito=${id}`;

//Google extract data user
export const urlUserGoogle = (accesToken = "") =>`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accesToken}`