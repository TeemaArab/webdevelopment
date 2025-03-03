
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// uncommon way

// function printNumber(number) {
//   console.log(number);
// }
// numbers.forEach(printNumber);

// more common way

numbers.forEach(function(number){
    console.log(number);
})

// an easier an newer way to read
for (let num of numbers){
    console.log(num);
}

const movies =[
    {
    title: "Pride and Prejudice",
    score: 5,
},
{
    title: "The Lion King",
    score: 4,
},
{
    title: "The Little Mermaid",
    score: 3,
},
{
    title: "The Notebook",
    score: 2,
},
{
    title: "The Godfather",
    score: 1,
}
]
movies.forEach(function(movie){
  console.log(`${movie.title} - ${movie.score}/5`)
})