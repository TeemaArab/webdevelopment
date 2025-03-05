
const allLi= document.querySelectorAll('li');
for(let i=0; i<allLi.length; i++){
    allLi[i].classList.toggle('highlight');
}