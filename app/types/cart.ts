export type CartItemProp = {
  id: number;
  title: string;
  price: number,
  brand: string;
  quantity: number;
  thumbnail: string;
  images: string[];
}

export type CartStateProp = {
  cart: {
    isOpen: boolean;
    items: CartItemProp[],
    // totalAmount: 0,
    // addItem: (item) => {},
    // removeItem: (id) => {},
    // clearCart: () => {},
  }
}