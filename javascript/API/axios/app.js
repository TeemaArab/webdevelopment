// axios.get ("https://swapi.py4e.com/api/people/1/")
// .then((response =>{
//     console.log("Response: ", response);
// })
// .catch((error) => {
//     console.error("Error: ", error);
// })

// const getStarWarsCharacter = async (id) =>{
//     try{
//         const  response = await axios.get(`https://swapi.py4e.com/api/people/${id}/`)
//         const data = response.data;
//         console.log("Response: ", data);
//     }catch(error){
//         console.error("Error: ", error);
//     }
   
// };
// getStarWarsCharacter(5)
// getStarWarsCharacter(10)

// const jokes= document.querySelector("#jokes");

// button.addEventListener("click", addNewJoke);
// const addNewJoke = async () =>{
//     const jokeText = await getDadjoke();
//     console.log(jokeText);
//     const newLI = document.createElement("li");
//     newLI.append(jokeText);
//     jokes.append(newLI);
// }
// const getDadjoke = async()=>{
//     try {
//         const config = { headers: {Accept: "application/json"} };
//         const res = await axios.get("https://icanhazdadjoke.com/", config)
//         return res.data.joke; 
    

//     }catch (error) {
//         console.error("Error: ", error);
//     }
// }
    
// const button= document.querySelector("button");


// **********************************************************************
const productList = document.querySelector("#productList");


let currentProductIndex = 0;



const addNewProduct = async() => {
    const products = await getProducts();  // Fetch products from the API
   console.log(products);
   const newLi =document.createElement("li");
   newLi.append(products);
   productList.append(newLi);

  
  
}


const getProducts =async () => {
    try{
        const response = await axios.get("https://fakestoreapi.com/products")
        const products = response.data;

        //get one product at a time
        if(currentProductIndex < products.length){
            const product = products[currentProductIndex];
            currentProductIndex++;
            return `${product.title} - $${product.price}`;
        }else{
            return "No more products available.";
        }
  } catch (error) {
    console.error("Error:", error);
    
  }
};

const button = document.querySelector("#fetchProducts");
button.addEventListener("click", addNewProduct);
