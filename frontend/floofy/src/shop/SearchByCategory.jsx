import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';


const animatedComponents = makeAnimated();

const categoryOptions = [
      { label: "Dog Food", value:"Dog Food"},
      { label: "Cat Food", value:"Cat Food"}
]
export default function SearchByCategory() {
      const [selectedOptions , setSelectedOptions] = useState([]);
      const [selOptionToUse , setSelOptionToUse] = useState([])
      const handleChange = (selectedOptions)=>{
            setSelectedOptions(selectedOptions);
      }

      useEffect(()=>{
            console.log("selected value in the state: " , selectedOptions);
            const selectedValues = selectedOptions.map(options => options.value)
            setSelOptionToUse(selectedValues);
      },[selectedOptions])
      
      console.log("setOption use: " , selOptionToUse);
      localStorage.setItem("selectProdCategory" , selOptionToUse);
      return (
            <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  // defaultValue={[colourOptions[4], colourOptions[5]]}
                  isMulti
                  options={categoryOptions}
                  onChange = {handleChange}
                  value={selectedOptions}
            />
      );
}