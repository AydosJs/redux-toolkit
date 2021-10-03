import React from "react";
import { Link, useLocation } from 'react-router-dom'
import { useSelector, } from "react-redux";

const styles = {
  headerStyle: {
    display: "flex", justifyContent: "center",
    background: 'rgb(202 240 248 )',
    // background: "#8ecae6"
    boxShadow: '0 0 10px rgb(32 45 74 / 20%)'
  },
  listItem: {
    cursor: "pointer",
  },
  ulStyle: {
    display: " flex",
    alignItems: "center",
    flexDirection: "row",
    gap: "20px",
    listStyle: "none"
  },
  linkStyle: {
    textDecoration: 'none',
    color: 'rgba(0,0,0, .7)'
  },
  activeLinkStyle: {

  }
}
export default function HeaderComponent(props) {
  const cardsStore = useSelector(state => state.cards)
  const location = useLocation()
  return (
    <section>
      <header style={styles.headerStyle}>
        <nav>
          <ul style={styles.ulStyle}>
            <li style={styles.listItem, { boxShadow: location.pathname == '/' ? '0px 2px 0px 0px  rgba(0,0,0, .7)' : null }}>
              <Link to="/" style={styles.linkStyle}>
                Products
              </Link>
            </li>
            <li style={styles.listItem, { boxShadow: location.pathname == '/cards' ? '0px 2px 0px 0px  rgba(0,0,0, .7)' : null }}>
              <Link to="/cards" style={styles.linkStyle}>
                Cards "{cardsStore.length}"</Link>
            </li>
          </ul>
        </nav>
      </header>
      {props.children}
    </section>
  )
}