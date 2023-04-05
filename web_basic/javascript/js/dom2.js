const box = document.getElementsByClassName("box");
box[0].style.backgroundColor = "black";


// const redButton = document.getElementsByClassName("red-button");
// const blueButton = document.getElementsByClassName("blue-button");

// redButton[0].onclick = () => {
//     box[0].style.backgroundColor = "red";
// }

// blueButton[0].onclick = () => {
//     box[0].style.backgroundColor = "blue";
// }

addEvent(0);

function addEvent() {
    // Elements들을 사용할 때에는 인덱스 값을 꼭 줘야함! (이거 틀림)
    // 카멜표기법으로 바꿔준다.
    const redButton = document.getElementsByClassName("red-button");
    const blueButton = document.getElementsByClassName("blue-button");

    for(let i = 0; i < box.length; i++) {
        redButton[i].onclick = () => {
            box[i].style.backgroundColor = "red";
        }
        blueButton[i].onclick = () => {
            box[i].style.backgroundColor = "blue";
        }
    }
}

const addButton = document.getElementsByClassName("add-button");
addButton[0].onclick = () => {
    const container = document.getElementsByClassName("container");
    // innerHTML이 일어나면 이벤트들이 삭제됨. (객체가 새로 생기는 거임!)
    container[0].innerHTML += `
        <div class="box"></div>
        <button class="red-button">빨간색</button>
        <button class="blue-button">파란색</button>
    `;
    box[box.length - 1].style.backgroundColor = "black";

    // innerHTML을 사용해줌으로써 객체가 새로 생겼으므로 이벤트를 처음부터 다시 준다.
    addEvent();
}




