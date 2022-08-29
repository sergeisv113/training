import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Component/Todolist";
import {FullInput} from "./Component/Input/FullInput";
import {Input} from "./Component/Input/Input";
import {ButtonInput} from "./Component/Input/ButtonInput";

export type FilterValueType = 'all' | 'active' | 'completed'

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])
// for fullInput
const addMessage = (title: string) => {
    console.log(title)
    // let messageNew = {message: 'messageNew'}
    let messageNew = {message: title}
    setMessage([messageNew, ...message])
}
// for Input+ButtonInput
    let [title, setTitle] = useState('')
const callBackButtonHandler = () => {
    addMessage(title)
    setTitle('')
}

    const TodolistTitle: string = 'What to learn'
    let [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS&TS', isDone: true},
        {id: 3, title: 'React', isDone: false},
    ])
    let [filter, setFilter] = useState<FilterValueType>('all')

    let tasksForTodolist = tasks
    if (filter === 'completed'){tasksForTodolist = tasks.filter(t => t.isDone === true)}
    if(filter === 'active'){tasksForTodolist = tasks.filter(t => t.isDone === false)}

    function changeFilter(value: FilterValueType){
        setFilter(value)
    }

    function removeTask(id: number) {
        let filterRemoveTasks = tasks.filter(t => t.id !== id)
        setTasks(filterRemoveTasks)
    }

    return (
        <div className="App">
            <Todolist
                title={TodolistTitle} tasks={tasksForTodolist} removeTask={removeTask} changeFilter={changeFilter}
            />
            <div>
            {/*<FullInput message={message}  addMessage={addMessage}/>*/}
            <Input title={title} setTitle={setTitle}/>
            <ButtonInput name={'+'} callBack={callBackButtonHandler}/>

                {message.map((m, index) => {
                    return (
                        <div key={index}>{m.message}</div>
                    )
                })}
            </div>
        </div>
    );
}

export default App;
