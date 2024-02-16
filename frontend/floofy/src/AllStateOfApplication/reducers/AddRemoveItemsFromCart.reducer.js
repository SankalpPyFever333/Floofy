const initialState = {
      ProdCount: 0
}


const AddRemoveProductReducer =  (state = initialState , action)=>{
      switch(action.type){
            case "Add_Item_To_Cart":
                  
                  return {
                        ...state,
                        ProdCount: state.ProdCount + 1
                  };
                  
            case "Remove_Item_From_Cart":
            
                  if(state.ProdCount >0){
                        return {
                          ...state,
                          ProdCount: state.ProdCount - 1
                        };
                  }
                  else{
                        return state;
                  }


                  

            default:
                  return state
      }
}

export default AddRemoveProductReducer;
