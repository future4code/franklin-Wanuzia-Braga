import React from "react";
import { Switch, Route } from "react-router-dom";
import CartScreen from "../screens/CartScreen/CartScreen";
import ProductsScreen from "../screens/ProductsScreen/ProductsScreen";

const Router = () => {
  return (
         <Switch>
        <Route exact path={"/"}>
          <ProductsScreen />
        </Route>
        <Route exact path={"/carrinho"}>
          <CartScreen />
        </Route>
        <Route>
          <div>Erro 404 - Página não encontrada</div>
        </Route>
      </Switch>
 
  );
};

export default Router;
