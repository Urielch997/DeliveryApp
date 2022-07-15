
const urlApi = process.env.REACT_APP_URL_API;
export const OAUTH2_REDIRECT_URI = process.env.REACT_APP_OAUTH2_REDIRECT_URI

export const getProductos = (page = 0,size=10) =>`${urlApi}products?page=${page}&size=${size}&idUser=1`;
export const getFavoritos = () => `${urlApi}User/favoritos?idUser=1&page=0&size=10`;
export const SaveFavoritos = () => `${urlApi}User/favoritos`;
export const DeleteFavoritos = (id:number) => `${urlApi}User/favoritos?idFavorito=${id}`;

//Google extract data user
export const urlUserGoogle = (accesToken = "") =>`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accesToken}`


export const GOOGLE_AUTH_URL = urlApi + 'oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = urlApi + 'oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = urlApi + 'oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;
