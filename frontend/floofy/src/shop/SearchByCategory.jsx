import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


const animatedComponents = makeAnimated();

const categoryOptions = [
      {label:"Pet care" , value:"Pet care"},
      {label:"health & Wellness" , value:"Pet Medicine"},
      {label:"Pet food" , value:"Pet food"},
      {label:"Pet products" , value:"pet products"},
]
export default function SearchByCategory() {
      return (
            <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  // defaultValue={[colourOptions[4], colourOptions[5]]}
                  isMulti
                  options={categoryOptions}
            />
      );
}