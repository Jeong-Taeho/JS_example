const initialState = JSON.parse(storage.getItem('todos') || '[]')

const $main = document.querySelector('.app')

new App({
    $target : $main,
    initialState: initialState
})
