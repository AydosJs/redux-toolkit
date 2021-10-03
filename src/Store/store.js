import { configureStore } from '@reduxjs/toolkit'
import productsStore from './ProductsStore/productsStore'
import cardsStore from './CardsStore/cardsStore'

export default configureStore({
  reducer: {
    products: productsStore,
    cards: cardsStore
  }
})

