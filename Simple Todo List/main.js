const data = [
    {
        text : '자바스크립트 공부하기'
    },
    {
        text : '자바스크립트 복습하기'
    }
]

const data1 = [
    {
        text : '정태호'
    },
    {
        text : '인천광역시'
    },
    {
        text : '프로그래머스 데브코스'
    }
]

const $main = document.querySelector('.app')

new App({
    $target : $main,
    initialState: data
})
