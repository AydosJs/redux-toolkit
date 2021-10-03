import React from "react";


const styles = {
  cardStyle: {
    maxWidth: 160,
    minWidth: 160,
    padding: '14px',
    background: 'rgb(202 240 248 / 30%)',
    borderRadius: 4,
    // cursor: "pointer"
    '&:hover': {
      background: 'rgb(202 240 248 / 100%)',
    }
  },
  titleStyle: {
    fontWeight: 450,
    display: '-webkit-box',
    overflow: 'hidden',
    '-webkit-box-orient': 'vertical',
    textOverflow: 'ellipsis',
    whiteSpace: 'normal',
    '-webkit-line-clamp': 2,
    marginBottom: 2,

  },
  paragrphStyle: {
    fontSize: '.8em',
    color: "rgba(0,0,0,0.5)",
    display: '-webkit-box',
    overflow: 'hidden',
    '-webkit-box-orient': 'vertical',
    textOverflow: 'ellipsis',
    whiteSpace: 'normal',
    WebkitLineClamp: 3,
  },
  buttonStyle: {
    background: 'rgba(230, 57, 70, 0.6)',
    border: 'none',
    padding: '4px 12px',
    borderRadius: 2,
    cursor: 'pointer'
  },
  imageBoxStyle: {
    overflow: "hidden",
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 4
  },
  priceStyle: {
    fontSize: '.9em',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: 4,
    padding: 0,
    margin: 0,

  },
  priceTextStyle: {
    padding: 0,
    margin: 0,
    color: "rgba(0,0,0,0.5)",
    fontSize: '.9em',
  }
}

export default function CardsItemComponent(props) {
  const { item, removeItem } = props

  return (
    <section style={styles.cardStyle}>
      <div style={styles.imageBoxStyle}>
        <img src={item.image} style={styles.imageStyle} />
      </div>
      <div>
        <header>
          <p style={styles.titleStyle}>
            {item.title}
          </p>
          <p style={styles.priceStyle}>
            <p style={styles.priceTextStyle}>price:</p>
            ${item.price}
          </p>
        </header>
        <section>
          <p style={styles.paragrphStyle}>{item.description}</p>
        </section>
        <footer>
          <button style={styles.buttonStyle} onClick={removeItem}>
            Rremove
          </button>
        </footer>
      </div>
    </section>
  )
}