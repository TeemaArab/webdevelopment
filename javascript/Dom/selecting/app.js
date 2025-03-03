// const  chicken = document.getElementById('banner')

// getElementsByTagName  => get all elements by sth

// const allImages = document.getElementsByTagName('img');
// for(let img of allImages){
//     console.log(img.src);
// }
// const paragraphs = getElementsByTagName('p');
// for(let para of paragraphs){
//     console.log(para);
// }
// const squareImages = document.getElementsByClassName('square');
// for(let img of squareImages){
//     console.log(img.src);
// }

// const h1 = documentquerySelector('h1');
// console.log(h1.innerText);

const links = document.querySelectorAll('a');
for(let link of links){
    link.style.color='rgb(231, 18, 228)';
    link.style.textDecorationStyle = 'wavy';
}