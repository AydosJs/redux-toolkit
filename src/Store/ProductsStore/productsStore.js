import { createSlice } from '@reduxjs/toolkit'

export const productsStore = createSlice({
  name: 'products',
  initialState: [
    {
      id: 1,
      title: 'House 1',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: '25,000.00',
      location: 'California',
      numberOfRooms: 6,
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      id: 2,
      title: 'Surban house',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: '32,000.00',
      location: 'Los-Angles',
      numberOfRooms: 8,
      image: "https://st.depositphotos.com/1029202/1818/i/950/depositphotos_18182497-stock-photo-suburban-house.jpg"
    },
    {
      id: 3,
      title: 'Yard',
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      price: '17,000.00',
      location: 'USA',
      numberOfRooms: 10,
      image: "http://static8.depositphotos.com/1392258/871/i/450/depositphotos_8711377-Suburban-home-with-front-porch.jpg"
    },
  ],
  reducers: {}
})

export default productsStore.reducer