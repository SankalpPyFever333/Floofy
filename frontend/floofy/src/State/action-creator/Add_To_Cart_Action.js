export const Add_Prod_to_Cart = ()=>{
      return (dispatch)=>{
            dispatch({
              type: "Add_Prod_To_Cart",
            });
      }
}

export const Remove_Prod_From_Cart = ()=>{
      return (dispatch) => {
        dispatch({
          type: "Remove_Product_From_Cart",
        });
      };
}


