import React from 'react'

const TextInput = ({placeholder, onChangeText}) => {
    return(
        <input type='text' placeholder={ placeholder } className='text_input' onChange={(e) => onChangeText(e.target.value) }></input>
    )
}

export default TextInput