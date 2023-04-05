// 웹페이지로 이동 시켜줌. (페이지 이동시 사용)
// location.href = "https://www.naver.com";

const naverButton = document.getElementsByTagName("button");
naverButton[0].onclick = () => {
    // 프로퍼티 변수명이다. history를 남김.
    // location.href = "https://www.naver.com";
    // 메소드이다. history를 남기지 않음.
    location.replace("https://www.naver.com");
}

naverButton[1].onclick = () => {
    location.href = "http://127.0.0.1:5500/javascript/array.html"
}