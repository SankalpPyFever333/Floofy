const Product_Counter_Reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "Add_Prod_To_Cart":
      return { count: state.count + 1 };
    case "Remove_Product_From_Cart":
      return { count: state.count - 1 };

    default:
      return state;
  }
};

export default Product_Counter_Reducer;

