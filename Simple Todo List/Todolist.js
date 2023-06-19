export default function todoList( {$target, initialState, onListClick, onRemove} ) {
    const $todoList = document.createElement('div');
    $target.appendChild($todoList)

    this.state = initialState


    this.setState = nextState => { //현재 상태로 새로운 상태로 변경하고 render()를 다시 호출
        this.state = nextState
        this.render();
    }
    
    //this.state : [{ text : '자바스크립트 공부하기' }, {text : '...' }]
    this.render = () => {
        $todoList.innerHTML = `
        <ul>
            ${this.state.map((todo,id) => `<li data-id=${id} style="text-decoration: ${todo.isCompleted === true ? 
                'line-through' : 'none'}"> ${todo.text}</li> <button data-id=${id}>삭제</button>`).join('')}
        </ul>`

        document.querySelectorAll('li').forEach(($list) => {
            $list.addEventListener('click', (e) => {
                const {id} = e.target.dataset
                onListClick(id)
            })
        })

        document.querySelectorAll('button').forEach(($remove) => {
            $remove.addEventListener('click', (e) => {
                const id = e.target.dataset.id
                onRemove(id)
            })
        })
    }

    this.render();
}