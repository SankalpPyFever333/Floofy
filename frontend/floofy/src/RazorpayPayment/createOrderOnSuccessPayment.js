export const createProductOrder = async ()=>{
      
      const postProductOrder = await fetch(
        "http://localhost:3000/api/place_OrderByUser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            totalAmount: localStorage.getItem("TotalPayableAmount"),
            User: localStorage.getItem("userId"),
            deliveryAddress:JSON.stringify({
              Adress: {
                HomeAddress: localStorage.getItem("HomeAddress"),
                PIN: localStorage.getItem("PINCOde"),
                District: localStorage.getItem("district"),
              },
            },) ,
            Products: {
              product: localStorage.getItem("ProductID"),
              quantity: localStorage.getItem("productCount"),
            },
          }),
        }
      );

      // IN this I hvae to createOrder in sb(Almost complete).


      if(postProductOrder.ok){
            return postProductOrder;
      }
      else{
            throw new Error("Error in creating order")
      }

}

