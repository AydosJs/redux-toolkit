import React from "react";
import HeaderComponent from '../HeaderComponent'
import ProductsItemComponent from '../Components/ProductsItemComponent'
import { useSelector } from "react-redux";

const styles = {
  mainStyle: {
    padding: '62px 260px',
    width: "100%",
    display: 'flex',
    gap: "20px",
    flexWrap: 'wrap',
    boxSizing: 'border-box'
  }
}

export default function ProductsListContainer() {
  const productsStore = useSelector(state => state.products)
  return (
    <HeaderComponent >
      <main style={styles.mainStyle}>
        {productsStore?.map(item => (
          <ProductsItemComponent item={item} key={item.id} />
        ))}
      </main>
    </HeaderComponent>
  )
}