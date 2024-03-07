import React from 'react'
import MainInventorySidebar from './MainInventorySidebar'
import MainProductInventoryTabular from './ProductInventory/MainProductInventoryTabular';
import AppBarAdmin from '../AdminModule/AppBarAdmin';
import { useState } from 'react';

function MainInventoryManager() {
      const [currentIteminInventory, setCurrentIteminInventory] = useState('ProductInventory');
  return (
    <div>
              <div className="container-fluid">
                    <div className="row">
                          <div className="col-sm-2 border-end ">
                                
                                <MainInventorySidebar setCurrentItem={setCurrentIteminInventory} />
                          </div>
                          <div className="col-sm-10">
                                {/* <AppBarAdmin/> */}
                                <div style={{ flex: 1, padding: '20px' }}>
                                      {currentIteminInventory === 'ProductInventory' && <MainProductInventoryTabular />}
                                      
                                </div>
                          </div>
                    </div>
              </div>
    </div>
  )
}

export default MainInventoryManager
