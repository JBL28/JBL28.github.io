// page 스크롤 기능 구현을 위한 변수설정
const pages = document.getElementsByClassName("page");
const page_container = document.getElementsByClassName("page_container")[0];
const header = document.getElementsByClassName("header")[0];
const header_button = document.getElementsByClassName('header_button');
let currentPage = 0;
let isScrolling = false;

// 현재 위치한 인덱스로 스크롤
const scrollToPage = (index) => {
    currentPage = index;
    isScrolling = true;
    page_container.scrollTo({
        top: pages[index].offsetTop - header.offsetHeight, 
        left: 0,
        behavior: 'smooth'
    });
    setTimeout(() => isScrolling = false, 800); // 스크롤 애니메이션동안 스크롤을 비활성화
}

// 마우스 휠 이벤트 시 scrollToPage
window.addEventListener('wheel', (event) => {
    event.preventDefault();
    if (isScrolling === true) return;   // 스크롤 애니메이션동안 스크롤을 비활성화

    if(event.deltaY > 0 && currentPage < pages.length -1) {
        currentPage++;
        scrollToPage(currentPage);
    }
    else if (event.deltaY < 0 && currentPage > 0) {
        currentPage--;
        scrollToPage(currentPage);
    }
}, {passive: false})

const phoneCopy = async () => {
    try {
        await navigator.clipboard.writeText("010-1234-5678");
        alert("복사 완료!");
    } catch (err) {
        alert("복사 실패: " + err.message);
    }
}

let currentCard = 0;

const scrollToIndex = (index) => {
    const cards = document.getElementsByClassName("project_container");
    const box = document.getElementsByClassName("project_box")[0];
    
    currentCard = index;

    isScrolling = true;
    margin = parseFloat(getComputedStyle(cards[index]).marginLeft)
    box.scrollTo({
        top: 0, 
        left: cards[index].offsetLeft - 3.3*margin,
        behavior: 'smooth'
    });
    setTimeout(() => isScrolling = false, 100); // 스크롤 애니메이션동안 스크롤을 비활성화
}

const scrollCard = (index) => {
    const cards = document.getElementsByClassName("project_container");
    if (isScrolling === true) return;

    if (index === "next"){
        if(currentCard == cards.length - 1)
            currentCard = 0;
        else
            currentCard++;
    } else if (index === "prev") {
        if(currentCard == 0)
            currentCard = cards.length - 1;
        else
            currentCard--;
    } else {
        console.error("잘못된 접근입니다.");
    }
    console.log(currentCard);

    scrollToIndex(currentCard);
}