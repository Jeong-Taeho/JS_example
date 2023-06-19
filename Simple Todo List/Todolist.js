export default function todoList( {$target, initialState} ) {
    const $todoList = document.createElement('div');
    $target.appendChild($todoList)

    this.state = initialState;

    this.setState = nextState => { //현재 상태로 새로운 상태로 변경하고 render()를 다시 호출
        this.state = nextState
        this.render();
    }
    
    //this.state : [{ text : '자바스크립트 공부하기' }, {text : '...' }]
    this.render = () => {
        $todoList.innerHTML = `
            <ul>
                ${this.state.map(({text}) => `<li>${text}</li>`).join('')}
            </ul>
        `
    }
    this.render();
}