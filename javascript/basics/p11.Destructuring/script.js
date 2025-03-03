// Destructuring array
// storing each element in a variable
const scores =[10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const [first, second, ...last] = scores;

// destructuring object
const user = {
    name: 'John',
    age: 25,
    email: 'john@example.com',
    DOB:  '01-01-1995',
    address: '123 main street',
    city: 'New York',
    phone: '123-456-7890',

};
const user2 = {
    name: 'Jane',
    age: 25,
    email: 'jane@example.com',
}
// to retrieve first name and phone number
// FIRST WAY
//---------------------
   // const firstName = user.name;
   // const phone = user.phone;
//------------------------
// secnod way
// const{name,phone} = user;

// if you wanna change the anme of variable, use the following syntax
const {phone: telephone} = user;
const  {name: firstName} = user;

// if you wanna retrieve the value of a property that does not exist in the object, you can set a default value
const {name, age, DOB='N/A'} = user2;

// param Destructuring


// this is a normal way 
function person(user){
    return `${user.name} ${user.age}`;
}

// using destructuring
function person(user){
    const{name,age} = user;
    return `${name} ${age}`;
}

//or
function person({name, age}){
    return `${name} ${age}`;
}

// movie example
const movie =[{
    title: 'Inception',
    director: 'Christopher Nolan',
    year: 2010,
    rating: 8.8,
},
    {
        title: 'The Dark Knight',
        director: 'Christopher Nolan',
        year: 2008,
        rating: 9.0,
    },
    {
        title: 'The Dark Knight Rises',
        director: 'Christopher Nolan',
        year: 2012,
        rating: 8.4,
    },
    {
        title: 'Interstellar',
        director: 'Christopher Nolan',
        year: 2014,
        rating: 8.6,
    },
    {
        title: 'Dunkirk',
        director: 'Christopher Nolan',
        year: 2017,
        rating: 7.8,
    },
    {
        title: 'Tenet',
        director: 'Christopher Nolan',
        year: 2020,
        rating: 7.5,
    }
];
// we wanna retreive movies with rating higher than 7
// we can use filter method
const goodMovies = movies.filter(movie => movie.rating>7);
// or use destructuring
const goodMovies2 = movies.filter(({rating}) => rating>7);

// we can also use map method to retrieve the title of the movies
movies.map(movie=>{
    return `  ${movie.title}  directed by ${movie.director} was rated ${movie.rating}`;
})
// or use destructuring
movies.map(({title, director, rating})=>{
    return `  ${title}  directed by ${director} was rated ${rating}`;
});