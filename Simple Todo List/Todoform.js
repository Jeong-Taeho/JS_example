export default function todoForm( {$target, onSubmit} ){

    const $form = document.createElement('form');
    $target.appendChild($form)

    this.render = () => {
        
        let isInit = false;

        $form.innerHTML =
            `<input type = "text" name = "todo" />
             <button>Add</button>
            `;
        
        if(!isInit){
            $form.addEventListener('submit', e => {
                e.preventDefault() //태그의 기본 동작 끄기

                const $input = $form.querySelector('input[name=todo]')
                //Tip 버튼에 type을 지정하지 않으면 기본적으로 submit이기 때문에 엔터나, 버튼을 클릭해도 동작이 된다.
                const text = $input.value // form에 입력된 값이 저장된다.
                
                if(text.length >= 1){
                    $input.value = ''
                    onSubmit(text);
                }

            })
            isInit = true;
        }
    }
    
    this.render()
} 