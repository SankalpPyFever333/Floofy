export const createProductOrder = async ()=>{
      
      try {
        const postProductOrder = await fetch(
          "http://localhost:3000/api/place_OrderByUser",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              totalAmount: localStorage.getItem("TotalPayableAmount"),
              CustomerEmail: localStorage.getItem("CustomerEmail") , 
              User: localStorage.getItem("userId"),
              deliveryAddress: {
                
                  HomeAddress: localStorage.getItem("HomeAddress"),
                  PIN: localStorage.getItem("PINCOde"),
                  District: localStorage.getItem("district"),
                
              },
              Products: {
                product: localStorage.getItem("ProductID"),
                quantity: localStorage.getItem("productCount"),
              },
            }),
          }
        );
  
        // IN this I hvae to createOrder in db(Almost complete).
  
  
        if(postProductOrder.ok){
              return postProductOrder;
        }
        else{
              throw new Error("Error in creating order")
        }
      } catch (error) {
        console.log("Error in creating order:" , error);
      }

}

