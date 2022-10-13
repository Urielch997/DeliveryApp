import ShoopingCartScreen from "../Screens/ShoopingCartScreen";
import {  Route,Switch } from "react-router-dom";
import FavoritosScreen from "../Screens/FavoritosScreen";
import HomeScreen from '../Screens/HomeScreen';
import OrdenScreen from "../Screens/OrdenScreen";
import PerfilScreen from "../Screens/PerfilScreen";
import CheckoutScreen from "@/Screens/CheckoutScreen";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/"  component={() => <HomeScreen  />}/>
            <Route path="/Orden" component={()=> <OrdenScreen/>}/>
            <Route path='/Perfil' component={()=><PerfilScreen/>}/>
            <Route path='/Favoritos' component={()=><FavoritosScreen/>}/>
            <Route path="/shoopingCart" component={()=><ShoopingCartScreen/>}/>
            <Route path="/checkout" component={()=><CheckoutScreen/>}/>
        </Switch>
    )
}

export default Routes
