import todoForm from "./Todoform.js"
import todoList from "./Todolist.js"
import Header from "./Header.js"
import { getItem, setItem } from "./Storage.js"
import TodoCount from "./TodoCount.js"

export default function App({ $target, initialState }) {

    TextDecoderStream.apply.
    
    new Header({
        $target,
        text : 'Simple Todo List'
    })

    new todoForm({
        $target,
        onSubmit: (text) => {
            const nextState = [...TodoList.state, {text, isCompleted : false} ]
            TodoList.setState(nextState)
            todoCount.setState(nextState)
            setItem('todos',JSON.stringify(nextState))
            
        }
    })

    const TodoList = new todoList({
        $target,
        initialState,
        onListClick: (id) => {
            const state = [...TodoList.state]
            console.log(id)
            state[id].isCompleted = !state[id].isCompleted
            TodoList.setState(state)
            todoCount.setState(state)
        },
    })

    const todoCount = new TodoCount({
        $target,
        initialState,
    })
}