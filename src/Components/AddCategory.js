import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setinputValue] = useState('');
    const handleChange=(e)=>{
        setinputValue(e.target.value);
    }

    const handleSumbit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategories(cats=>[inputValue,...cats]);
            setinputValue('');
        }
    }

    return (
        <form onSubmit={handleSumbit}>

            <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            />
        </form>
    )
}

AddCategory.propTypes={
    setCategories:PropTypes.func.isRequired,
}