/**
 * 1. 추가버튼 클릭시 input에 들어있는 value의 값을 list에 추가
 * 2. 확인버튼 클릭시 todo-content의 색상을 red로 변경, 취소선 적용
 * 3. 확인버튼 다시 클릭시 todo-content의 색상을 black으로 변경, 취소선 미적용
*/

// 내가한거
// const list = document.getElementsByClassName("list");

// addEvent();

// function addEvent() {
//     const okButton = document.getElementsByClassName("ok-button");
//     const todoContent = document.getElementsByClassName("todo-content");
//     for(let i = 0; i < list.length; i++) {
//         okButton[i].onclick = () => {
//             todoContent[i].style.color = "red";
//             todoContent[i].style.textDecoration = "line-through";
//         }
//     }
// }

// const addButton = document.getElementsByClassName("add-button");
// addButton[0].onclick = () => {
//     const todoValue = document.getElementsByClassName("todo-text")[0].value;
//     const todoList = document.getElementsByClassName("todo-list");
//     // innerHTML이 일어나면 이벤트들이 삭제됨. (객체가 새로 생기는 거임!)
//     todoList[0].innerHTML += `
//     <li class="list"><span class="todo-content">${todoValue}</span> <button class="ok-button">확인</button></li>
//     `;

//     addEvent();
// }

const addButton = document.getElementsByClassName("add-button");
addButton[0].onclick = () => {
    // 입력을 받은 후에 추가를 누르기 때문에 todoText를 안에서 받아줘야함!
    const todoText = document.getElementsByClassName("todo-text");
    const todoList = document.getElementsByClassName("todo-list");
    const li = document.createElement("li");
    li.innerHTML = `
        <input type="checkbox" class="ok-check"> <span class="todo-content">${todoText[0].value}</span>
    `;
    todoList[0].appendChild(li);

    addEvent();
}


function addEvent() {
    const okCheck = document.getElementsByClassName("ok-check");
    const todoContent = document.getElementsByClassName("todo-content");

    for(let i = 0; i < okCheck.length; i++) {
        okCheck[i].onchange = () => {
            if(okCheck[i].checked) {
                todoContent[i].style.color = 'red';
                todoContent[i].style.textDecoration = 'line-through';
            }else {
                todoContent[i].style.color = 'black';
                todoContent[i].style.textDecoration = 'none';
            }
        }
    }
}
