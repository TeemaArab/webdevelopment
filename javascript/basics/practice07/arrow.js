
const add = (x,y)=>{
    return x+y;
}
const subtract  = (x,y)=>{
    return x-y;
}
const rollDie= () =>{
    return Math.floor(Math.random()* 6)+1;
}

// when there is one parameter, you can omit the parentheses
const square1 = x => {
    return x*x;
}
const square2 = x =>{
    x*x;
}

const square3 = x => x*x; // without the curly braces, the return is implicit

//different ways of writirng a function

const powerThree = (x) =>{
    return x**3;
}
const powerThree2 = x =>{// no parantheses needed when there is only one parameter
    return x**3;
}
const powerThree3 = x => ( // with parentheses, the return is implicit
   x**3
);
const powerThree4 = x => x**3; // without the curly braces, the return is implicit

///////////////////////////////////////////
//moviesexample

const movies =[
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
movies.map(function(movie){
    return movie.title;
})

const newMovies = movies.map(movie=>{
    return `${movie.title} - ${movie.score/10}`;
})
const titles= movies.map( movies=> movies.title);
