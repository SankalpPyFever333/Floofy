export const AddItemToCart = (AddProdCount) => ({
  type: "Add_Item_To_Cart",
  payload: AddProdCount,
});

export const RemoveItemFromCart = (RemoveProdCount) => ({
      type: "Remove_Item_From_Cart",
      payload: RemoveProdCount
})


