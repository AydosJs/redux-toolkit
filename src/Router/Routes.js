import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CardsListContainer from '../Containers/CardsListContainer'
import ProductsListContainer from '../Containers/ProductsListContainer'

export default function Routes() {
  return (
    <Switch >
      <Route path="/" exact >
        <ProductsListContainer />
      </Route>
      <Route path="/cards" exact >
        <CardsListContainer />
      </Route>
    </Switch>
  )
}