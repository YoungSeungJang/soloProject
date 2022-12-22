// 1. 노래에 마우스가 올라갈때 숫자가 ▶ 로 바뀌고 때지면 다시 숫자로보이도록하기

const $sectionItemList = document.querySelectorAll('#sectionItemList');
const $number = document.querySelectorAll('#number');
let num = 0;


for(let el of $sectionItemList){
    el.addEventListener('mouseenter', changeNumToPlayBtn)
}

for(let el of $sectionItemList){
    el.addEventListener('mouseleave', changePlayBtnToNum)
}

function changeNumToPlayBtn() {
    num = this.children[0].children[0].innerHTML;
    for(let el of $number){
        if(el.innerHTML === this.children[0].children[0].innerHTML){
            el.innerHTML = '▶';
            el.style.color = '#fff';
        }
    }
    console.log(num);
};

function changePlayBtnToNum() {
    for(let el of $number) {
        if(el.innerHTML === '▶'){
            el.innerHTML = num;
            el.style.color = '#999';
        }
    }
};

// 초록하트를 누르게되면 해당 노래가 삭제됨
let $heart = document.querySelectorAll('.greenHeart');

for(let el of $heart){
    // console.log(el);
    el.addEventListener('click', removeMusic);
}

function removeMusic(){
    this.parentNode.parentNode.parentNode.parentNode.remove();
};

// music오브젝트에서 가져와서 넣기
const $sectionItemBox = document.querySelector('#sectionItemBox');
const sectionItemList = document.createElement('div');
sectionItemList.classList.add('flex');
sectionItemList.id = 'sectionItemList';
sectionItemList.innerHTML = $sectionItemList[0].innerHTML;

$sectionItemBox.appendChild(sectionItemList);
console.log($sectionItemBox.appendChild(sectionItemList))