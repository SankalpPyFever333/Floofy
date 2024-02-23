const initialState = {
      cartItems: []
}


const AddRemoveProductReducer =  (state = initialState , action)=>{
      switch (action.type) {
        case "Add_Item_To_Cart":
          const existingItemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id);
      if (existingItemIndex !== -1) {
        // Item already exists, update quantity
        const updatedItems = [...state.cartItems];
        updatedItems[existingItemIndex].quantity += 1;
        return { ...state, cartItems: updatedItems };
      } else {
        // Item doesn't exist, add it to the cart
        
        return { ...state, cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }] };
      }

      // set the initails quantity to 0 bcoz intialiiy i am getting undefined.

        case "Decrement_Quantity":
          const itemToDecrementIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id);
      if (itemToDecrementIndex !== -1 && state.cartItems[itemToDecrementIndex].quantity > 1) {
        // Decrease quantity by 1 if quantity is greater than 1
        const updatedItems = [...state.cartItems];
        updatedItems[itemToDecrementIndex].quantity -= 1;
        return { ...state, cartItems: updatedItems };
      } else {
        // If quantity is 1 or item not found, return current state
        return state;
      }

        default:
          return state;
      }
}

export default AddRemoveProductReducer;
