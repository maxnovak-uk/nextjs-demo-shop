import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: { 
    isOpen: false, 
    items: [
      {
        id: 1,
        title: "Essence Mascara Lash Princess",
        price: 9.99,
        brand: "Essence",
        quantity: 1,
        thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
        images: [
          "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
        ]
      },
      {
        id: 2,
        title: "Eyeshadow Palette with Mirror",
        brand: "Glamour Beauty",
        price: 19.99,
        quantity: 2,
        thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png",
        images: [
          "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
        ]
      }
    ],
    totalAmount: 0 
  },
  reducers: {
    setModalVisibility: (state, action) => {
      state.isOpen = action.payload;
    },
    addItem: (state, payload) => { // + payload.amount
      // const updatedTotalAmount = state.totalAmount + payload.price * payload.amount;
      // const existingCartItemIndex = state.items.findIndex((item) => {
      //   return item.id === payload.id;
      // });
      // console.log(updatedTotalAmount, existingCartItemIndex);
    },
    removeItem: (id) => {},
    clearCart: () => {}
  },
});
export const { setModalVisibility } = cartSlice.actions;
export default cartSlice.reducer;
