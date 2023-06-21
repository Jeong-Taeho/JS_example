export default function todoList( {$target, initialState, onListClick, onDeleteBtn} ) {
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
            ${this.state.map(( {text,isCompleted}, id) => `<li data-id=${id} style="text-decoration: ${isCompleted === true ? 
                'line-through' : 'none'}"> ${text} </li>`).join('')}
        </ul>`

        const $button = document.createElement('button')
        // li.appendChild($button)
        dlasdmal;smasl;dmsamd;almdsma;LockManager;
        document.querySelectorAll('li').forEach(($list) => {
            $list.addEventListener('click', (e) => {
                const {id} = e.target.dataset
                onListClick(id)
            })
        })
    }

    this.render();
}