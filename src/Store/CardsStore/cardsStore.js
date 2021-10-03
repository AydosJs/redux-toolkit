import { createSlice } from '@reduxjs/toolkit'

export const cardsStore = createSlice({
  name: 'cards',
  initialState: [],
  reducers: {
    addCard: (state, action) => {
      const findIndex = state.findIndex(item => item.id === action.payload.id)
      if (findIndex === -1) {
        state.push(action.payload)
      }
    },
    removeCard: (state, action) => {
      return state = state.filter(item => item.id !== action.payload)
    }
  }
});

export const { addCard, removeCard } = cardsStore.actions
export default cardsStore.reducer