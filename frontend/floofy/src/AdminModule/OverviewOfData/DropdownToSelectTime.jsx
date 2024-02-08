import { useEffect } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function DropdownToSelectTime({selectedTimeFrame , setSelectedTimeFrame}) {
      const timeFrames = {
            '1': 'Last Month',
            '2': 'Last Year',
            '3': 'Last Week',
      };

      useEffect(()=>{
            setSelectedTimeFrame(timeFrames[3])
      },[])
      const handleSelect = (eventKey)=>{
            // console.log(timeFrames[eventKey]);
            setSelectedTimeFrame(timeFrames[eventKey])
      }

      return (
            <>
                  {['Primary'].map(
                        (variant) => (
                              <DropdownButton
                                    as={ButtonGroup}
                                    key={variant}
                                    id={`dropdown-variants-${variant}`}
                                    variant={variant.toLowerCase()}
                                    // title="Period"
                                    title={selectedTimeFrame}
                                    onSelect={handleSelect}
                              >
                                    <Dropdown.Item eventKey="3" active>
                                          Last Week
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey= "1" >Last Month</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="2">Last Year</Dropdown.Item>
                              </DropdownButton>
                        ),
                  )}
            </>
      );
}

export default DropdownToSelectTime;