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

// const links = document.querySelectorAll('a');
// for(let link of links){
//     link.style.color='rgb(231, 18, 228)';
//     link.style.textDecorationStyle = 'wavy';
// }

const newImage = document.createElement('img');
newImage.src ="https://media.istockphoto.com/id/1139648879/photo/traveller-woman-against-mountain-landscape.jpg?s=2048x2048&w=is&k=20&c=mpJOFitiuOg-DY8du3-eZ2Zf_lWqK4W00Sdgs_9hjOw="
document.body.appendChild(newImage);
newImage.classList.add('square');


newH3 = document.createElement('h3');
newH3.innerText = 'I am new h3';
document.body.appendChild(newH3);
//-------------------------------------------
p = document.querySelector('p');
p.append('I am a new text', ' let\'s have fun with learning new stuff')

//-----------------------------------------
const h2 = document.createElement('h2');
h2.innerText = 'these are adorable chickens';
const h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterend', h2);

const h3 = document.createElement('h3');
h3.innerText = 'I am new h3';
h1.after(h3);
