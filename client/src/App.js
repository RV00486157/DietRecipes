import React, {Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Logout from './components/Auth/Logout'
import Alert from './components/layout/Alert'
import { Layout } from './components/layout/Landing'
import Navigationbar from './components/layout/Navbar'
import Diets from './components/diets/Diets';
import DietShow from './components/diets/Show';
import DietNew from './components/diets/New';
import DietEdit from './components/diets/Edit';
import Recipes from './components/recipes/Recipes';
import RecipeNew from './components/recipes/New';
import RecipesShow from './components/recipes/Show';
import RecipeEdit from './components/recipes/Edit';
import Cart from './components/cart/Cart'
import Order from './components/cart/Order'
import OrderConfirmed from './components/cart/Confirmation'
import AdminOrders from './components/cart/AdminOrders'
import PrivateRoute from './components/routing/PrivateRoute'
import AdminRoute from './components/routing/AdminRoute'
import setAuthToken from './config/setAuthToken'


if(localStorage.getItem('x-auth')){
	setAuthToken(localStorage.getItem('x-auth'))
}

function App() {
  return (
    <Router>    
      <Fragment>
      <Navigationbar/>
			<Route exact path='/' component={Layout}/>
      <section className="container">
      <Alert/>
      
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/logout" component={Logout}/>
        <Route path="/diets" component={Diets} exact/>
        <Route path="/add_diet" component={DietNew}/>
        <Route path="/diets/edit/:id" component={DietEdit}/>
        <Route path="/diets/:id" component={DietShow}/>
        <Route path="/recipes" component={Recipes} exact/>
        <Route path="/add_recipes" component={RecipeNew}/>
        <Route path="/recipes/edit/:id" component={RecipeEdit}/>
        <Route path="/recipes/:id" component={RecipesShow}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/place_order/:id" component={Order}/>
        <Route path="/order_confirmation" component={OrderConfirmed}/>
        <Route path="/admin_orders" component={AdminOrders}/>
      </Switch>
      
      
      </section>
    </Fragment>
    </Router>

    );
}

export default App;
