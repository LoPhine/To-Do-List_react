import React from 'react'
import ScreenTitle from '../components/ScreenTitle'
import Button from '../components/Button'
import TextInputWitchIcon from '../components/TextInputWitchIcon'
import TaskList from '../components/TaskList'

const TaskScreen = ({ history })  => {
    return (
        <>
            <ScreenTitle>Olá Louise</ScreenTitle>
            <h3>Aqui estão suas tarefas</h3>
            <TextInputWitchIcon placeholder='Digite uma tarefa' onChangeText={ console.log } onPress={ console.log("Botãoclicado") } icon='plus' ></TextInputWitchIcon>
            <TaskList></TaskList>
            <Button onPress={() => history.push('/login') }>Sair</Button>
        </>
    )
    
}

export default TaskScreen