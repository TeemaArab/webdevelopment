// map creates a new array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const doubledNumbers = numbers.map(function(num){
    return num * 2;
})

const movies = [
    {
    title: 'Black Panther',
    score: 98
},
{
    title: 'Avengers: Infinity War',
    score: 90
},
{
    title: 'Spiderman: Homecoming',
    score: 80
},
{
    title:'The Incredibles 2',
    score: 85
}
]
const titles = movies.map(function(movie){
    return movies.title;
})