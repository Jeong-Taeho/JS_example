import App from "./App.js"
import { getItem } from "./Storage.js"


const initialState = getItem('todos', [])

const $main = document.querySelector('.app')

new App({
    $target : $main,
    initialState: initialState
})
