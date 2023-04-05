let numbers1 = [1,2,3,4,5];
let numbers2 = [6,7,8,9,10];
let numbers3 = new Array();

let numbers4 = numbers1.concat(numbers2);

console.log(numbers1);
console.log(typeof numbers2);
console.log(typeof numbers3);

console.log(numbers4);

function odd(num) {
    return num % 2 != 0;
}

let numbers5 = numbers4.filter(odd);
console.log(numbers5);

let numbers6 = numbers4.filter(n => n % 2 != 0);
console.log(numbers6);

for(let i = 0; i < numbers5.length; i++) {
    console.log("i: " + numbers5[i]);
}

for(let num of numbers5) {
    console.log(`forEach: ${num}`);
}

// List<String> list = new ArrayList<String>();
// list.forEach(n -> {});

numbers5.forEach(n => console.log(`ArrayForEach: ${n}`));

console.log(numbers5.indexOf(5));
// 없는 값을 찾을 때는 -1 출력
console.log(numbers5.lastIndexOf(2));
// 배열에 있는 것들을 하나의 문자열로 합쳐줌.
console.log(numbers5.join(";"));
// 배열의 크기를 리턴해줌. 값을 넣어줌.
console.log(numbers5.push(11));
console.log(numbers5);
// 첫번째 인덱스에 값을 추가해줌. 배열의 크기 리턴
console.log(numbers5.unshift(13));
console.log(numbers5);
// 제일 마지막에 있는 요소를 제거해줌. 제거된 값을 리턴해줌.
// stack 구조를 가지고 있는 것을 확인할 수 있다.
console.log(numbers5.pop());
console.log(numbers5);
// 원하는 인덱스의 값을 제거해줄 수 있다.
// 삭제된 값을 리턴 받는다.
// 뒤에 있는 숫자는 삭제하는 갯수를 의미함.
// 추가와 삭제를 동시에 할 수 있다.
// (시작인덱스, 삭제하고 갯수, 추가하고 싶은 값(많이 가능!))
// 추가값을 넣지않으면 추가가 안됨.
// 추가값에 배열객체가 들어올 수 있다. (다른 객체도 들어올 수 있다.)
console.log(numbers5.splice(2, 1, 15, 17));
console.log(numbers5);
// 배열을 잘라낼 수 있다.
// 3 ~ 6번 앞에 까지 잘라낼수 있다.
// 값을 추출하는 것이기 때문에 기본값을 바꾸지는 않는다.
console.log(numbers5.slice(3, 6));
console.log(numbers5);

// 숫자를 기준으로 정렬을 하고 싶을 때 compare를 생성해줘야함!
function compare(n1, n2) {
    if(n1 > n2) return 1;
    if(n1 === n2) return 0;
    if(n1 < n2) return -1;
}
console.log(numbers5.sort(compare));
//역정렬을 해줌.
console.log(numbers5.reverse());
// 쉼표를 가지고 나누어서 출력, 하나의 문자열로
console.log(numbers5.toString());

const backButton = document.getElementsByTagName("button");
backButton[0].onclick = () => {
    history.back();
}