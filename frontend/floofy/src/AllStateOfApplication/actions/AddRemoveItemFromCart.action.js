export const AddItemToCart = (product) => ({
  type: "Add_Item_To_Cart",
  payload: product,
});

export const RemoveItemFromCart = (productId) => ({
  type: "Decrement_Quantity",
  payload: productId,
});


