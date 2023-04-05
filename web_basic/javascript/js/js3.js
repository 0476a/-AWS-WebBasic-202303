window.onload = () => {
    
}


// function() a {
//     console.log("a 함수 호출");
// }


let a = function() {
    console.log("a 함수 호출");
}

a();

console.log(typeof a);

// let b = function(f) {
//     console.log("테스트가 프린트 되기 전에 무조건 실행");
//     f();
// }

let b = (f) => {
    console.log("테스트가 프린트 되기 전에 무조건 실행");
    f();
}

// a라는 함수 자체를 넣어주는 것임!
b(a);

// 익명함수를 넣어줘도 됨.
// 위에와 같은 의미를 가짐.
b(function(){console.log("test")});

// 정의와 동시에 실행을 바로하라!
// 괄호를 꼭 묶어줘야함!
(function(){console.log("test2");}());