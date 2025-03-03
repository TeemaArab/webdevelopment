const numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const newNums = numbers.filter(num => {
    return num % 2 === 0;
})

const movies =[
    {title: "Parasite", score: 95},
    {title: "Alien", score: 90},    
    {title: "Stand by Me", score: 89},
    {title: "Pride & Prejudice", score: 90},
    {title: "Home Alone", score: 100},
    {title: "Ninja Turtles", score: 80},
    {title: "The Goonies", score: 85},  
    {title: "Gladiator", score: 90},
    {title: "The Godfather", score: 100},
    {title: "The Dark Knight", score: 95},

]
const bestMovies = movies.filter( movie =>{
    return movie.score >= 90;
})