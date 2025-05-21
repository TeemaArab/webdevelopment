// fetch ("https://swapi.dev/api/people/1/")
// .then(res =>{
//     console.log("Resolved:", res);
//     return res.json()
// })
// .then(data => {
//     console.log("Data:", data);
//     return fetch("https://swapi.dev/api/people/2/");
// })
// .then((res)=> {
//     console.log("Second Request Resolved:", res);
//     return res.json()
// })
// .catch((err) => {
//     console.log("Error:", err);
// });

// let's use async functions to make the code cleaner
const loadStarWarsPeople = async () => {
    try {
        const res = await fetch("https://swapi.dev/api/people/1/")
        const data = await res.json();
        console.log("Data:", data);
        const res2 = await fetch("https://swapi.dev/api/people/2/")
        const data2 = await res2.json();
        console.log("Data:", data2);
    }
    catch (err) {
        console.log("Error:", err);
    }
   
};
loadStarWarsPeople();