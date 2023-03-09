import React from 'react'
import Select from 'react-select'
const CustomSelect = ({options,placeholder,name,className,defaultValue,onChange}) => {
  return (
        <Select options={options} placeholder={placeholder} className={className} name={name}
                defaultValue={defaultValue}
                onChange={onChange}
                styles={{
                  placeholder:styles=>({
                    ...styles,
                    color:'#4E5FFF'
                  }),
                  singleValue : styles => ({
                      ...styles,
                      color:'#4E5FFF',
                  }),            
                  input: styles => ({
                    ...styles,
                    color:"#4E5FFF"
                  }),
                  option:styles => ({
                    ...styles,
                    color:'#4E5FFF',
                  }),
                  control:styles => ({
                    ...styles,
                    border:'none',
                    outline:'none'
                  })
                }}  
        />
  )
}

export default CustomSelect
