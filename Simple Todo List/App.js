function App({ $target, initialState }) {
    
    new Header({
        $target,
        text : 'Simple Todo List'
    })

    new todoForm({
        $target,
        onSubmit: (text) => {
            const nextState = [...TodoList.state, {text}]
            TodoList.setState(nextState)

            storage.setItem('todos',JSON.stringify(nextState))
        }
    })

    const TodoList = new todoList({
        $target,
        initialState
    })
}