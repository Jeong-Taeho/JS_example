// // 버튼을 3개 만든다.
// const $button1 = document.createElement('button');
// $button1.textContent = 'Button1';
// $button1.className = 'button1';
// let button1toggleCount = 0;

// const $button2 = document.createElement('button');
// $button2.textContent ='Button2';

// const $button3 = document.createElement('button');
// $button3.textContent = 'Button3';
// // 버튼을 화면에 그린다.

// const $main = document.querySelector('body');
// $main.appendChild($button1);
// $main.appendChild($button2);
// $main.appendChild($button3);
// // 버튼을 클릭하면 삭선이 그어진다.

// const togleButton = ($button) => {
//   if($button.style.textDecoration === 'line-through'){
//     $button.style.textDecoration = 'none';
//   }else{
//     $button.style.textDecoration = 'line-through';
//   }
// }

// document.querySelectorAll('button').forEach(($button) => {
//   $button.addEventListener('click', (e) => { 
//     const {target} = e;
//     togleButton(target);
    
//     if(target.className === `button1`){
//       button1toggleCount++;
//       target.textContent = `Button1 클릭 횟수 : ${button1toggleCount}`;
//       if(button1toggleCount >= 3){
//         alert('그만 눌러')
//       }
//     }
//   })
// })

function TimerButton({$target, text, timer = 3000}){
    const button = new ToggleButton({$target, text, onClick: ()=>{
      setTimeout(() => {
        button.setState({
          ...button.state,
          toggled: !button.state.toggled
        })
      }, timer)
    }})
      
}

function ToggleButton({$target,text,onClick}){
  const $button = document.createElement('button')

  $target.appendChild($button)

  this.state = {
    clickCount : 0,
    toggled : false,
  }

  this.setState = (newState) => {
    this.state = newState
    this.render()
  }

  this.render = () => {
    $button.textContent = text

    $button.style.textDecoration =
      this.state.toggled ? 'line-through' : 'none'   
  }

  $button.addEventListener('click', () => {   
    this.setState({
      clickCount: this.state.clickCount+1,
      toggled: !this.state.toggled
    })

    if(onClick){
      onClick(this.state.clickCount)
    }
  })      

  this.render()
}

function ButtonGroup({$target, buttons}){
  const $group = document.createElement('div')
  let isInit = false

  this.render = () => {
    if(!isInit){
      buttons.forEach(({type, ...props}) => {
        if(type === 'toggle'){
          new ToggleButton({$target: $group, ...props})
        }else if(type === 'timer'){
          new TimerButton({$target: $group, ...props})
        }
      })


      $target.appendChild($group)
      isInit = true
    }
  }

  this.render()
}

const $main = document.querySelector('body')

new ButtonGroup({
  $target : $main,
  buttons: [
    {
      type : 'toggle',
      text : '토글 버튼',
    },
    {
      type : 'toggle',
      text : '토글 버튼',
    },
    {
      type : 'timer',
      text : '타이머 버튼',
      timer : 1000
    }
  ]
})