import React from 'react'
import AddProductModal from '../../AdminModule/Products/AddProductModal'

function MainProductInventoryTabular() {
  return (
    <div>
              <div class="container-fluid p-2">
                  <div className="row">
                        
                  </div>
                    <div class="row border-bottom ">
                          <div class="col border-end ">Product</div>
                          <div class="col border-end ">Category</div>
                          <div class="col border-end">Price</div>
                          <div class="col border-end">Quantity</div>
                          <div class="col border-end ">Inventory</div>
                          <div class="col border-end">Units Order</div>
                          <div class="col border-end">Units Sold</div>
                          <div class="col border-end">Manufacturer</div>
                          <div class="col border-end">Location</div>
                          {/* <div class="col border-end  text-center">{<AddProductModal />}</div> */}
                    </div>
            </div>
    </div>
  )
}

export default MainProductInventoryTabular


