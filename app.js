// page 스크롤 기능 구현을 위한 변수설정
const pages = document.getElementsByClassName("page");
const page_container = document.getElementsByClassName("page_container")[0];
const header = document.getElementsByClassName("header")[0];
const header_button = document.getElementsByClassName('header_button');
let currentPage = 0;
let isScrolling = false;

// 현재 위치한 인덱스로 스크롤
const scrollToPage = (index) => {
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

const phoneCopy = () =>{
    
}