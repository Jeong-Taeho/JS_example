export default function TodoCount ( {$target, initialState} ){

    if(!new.target){
        throw new Error ()
    }
    const $todoCount = document.createElement('span')
    $target.appendChild($todoCount);

    this.state = initialState

    this.setState = (nextState) => {
        this.state = nextState
        this.render()
    }


    this.render = () => {
        $todoCount.innerHTML = `
        ${this.state.filter(($list) => $list.isCompleted === true).length} / 
        ${this.state.length}
        `
    }

    this.render()
}