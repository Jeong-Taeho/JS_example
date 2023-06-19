import todoForm from "./Todoform.js"
import todoList from "./Todolist.js"
import Header from "./Header.js"
import { setItem } from "./Storage.js"

export default function App({ $target, initialState }) {
    
    new Header({
        $target,
        text : 'Simple Todo List'
    })

    new todoForm({
        $target,
        onSubmit: (text) => {
            const nextState = [...TodoList.state, {text}]
            TodoList.setState(nextState)

            setItem('todos',JSON.stringify(nextState))
        }
    })

    const TodoList = new todoList({
        $target,
        initialState
    })
}