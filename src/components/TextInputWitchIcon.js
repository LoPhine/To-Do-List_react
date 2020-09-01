import React from 'react'
import TextInput from '../components/TextInput'


const  TextInputWitchIcon = ({ placeholder, onChangeText, icon, onPress }) => {
    return(
        <>
            <TextInput placeholder={ placeholder } onChangeText={ onChangeText }></TextInput>
            <i className={ `fa icon fa-${ icon }`} onClick={ onPress }></i>
        </>

    )
}

export default TextInputWitchIcon