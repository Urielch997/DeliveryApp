
const urlApi = process.env.REACT_APP_URL_API;
export const OAUTH2_REDIRECT_URI = process.env.REACT_APP_OAUTH2_REDIRECT_URI

//Productos 
export const getProductos = (page = 0,size=10,idUser = 0) =>`${urlApi}products?page=${page}&size=${size}&idUser=${idUser}`;
export const getFavoritos = (idUser = 0) => `${urlApi}User/favoritos?idUser=${idUser}&page=0&size=10`;
export const SaveFavoritos = () => `${urlApi}User/favoritos`;
export const DeleteFavoritos = (id:number) => `${urlApi}User/favoritos?idFavorito=${id}`;
export const deleteFavoritosByIdUserAndIdProducto = (idUsuario:number,idProducto:number) =>`${urlApi}User/favorito?idUsuario=${idUsuario}&idProducto=${idProducto}`;

//Login con redes sociales
export const GOOGLE_AUTH_URL = `${urlApi}oauth2/authorize/google?redirect_uri=${OAUTH2_REDIRECT_URI}`;
export const FACEBOOK_AUTH_URL = `${urlApi}oauth2/authorize/facebook?redirect_uri=${OAUTH2_REDIRECT_URI}`;
export const register = `${urlApi}auth/signup`;
export const logout = () =>``;

//Obtener informacion del usuario
export const userInfo = `${urlApi}user/me`;
export const UpdateInfo = () =>`${urlApi}usuario`;

//ShoppingCart
export const getCountCart = (idCart:string) => `${urlApi}shoppingCart/countCart/${idCart}`;
export const getCart = (idCart:string) => `${urlApi}shoppingCart/getCart/${idCart}`;
export const addCart = `${urlApi}shoppingCart/addShoppingCart`;
