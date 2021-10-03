import React from "react";
import HeaderComponent from '../HeaderComponent'
import CardsItemComponent from '../Components/CardsItemComponent'
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { removeCard } from '../Store/CardsStore/cardsStore'

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

export default function CardsListContainer() {
  const cardsStore = useSelector(state => state.cards)
  const dispatch = useDispatch()

  return (
    <HeaderComponent >
      <main style={styles.mainStyle}>

        {cardsStore.length >= 1 && cardsStore?.map(item => (
          <CardsItemComponent item={item} removeItem={() => dispatch(removeCard(item.id))} />
        ))}
        {cardsStore.length === 0 && (
          <section style={{ display: 'flex', justifyContent: "center", width: '100%' }} >
            <p style={{
              color: 'rgba(0,0,0,0.6)'
            }}>
              No item yet :(
            </p>
          </section>
        )}
      </main>
    </HeaderComponent>
  )
}