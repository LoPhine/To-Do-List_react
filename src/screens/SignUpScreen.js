import React from 'react'
import ScreenTitle from '../components/ScreenTitle'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

const SignUpScreen = ()  => {
    return (
        <>
            <ScreenTitle>Cadastro</ScreenTitle>
            <TextInput onChangeText={console.log} placeholder="Seu Nome"></TextInput>
            <TextInput onChangeText={console.log} placeholder="seu@email.com"></TextInput>
            <Button onPress={() => console.log('clicou')}>Cadastrar</Button>
        </>
        
    )
    
}

export default SignUpScreen