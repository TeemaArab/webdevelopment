const form =document.querySelector('#searchForm');
form.addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission
   const searchTerm = form.elements.query.value
   const config ={params: {q: searchTerm}};
   const response = await axios.get(`https://api.tvmaze.com/search/shows`, config)
   makeImages(response.data);
    form.elements.query.value = ""; // Clear the input field
   
//    const img = document.createElement('img');
//    img.src = response.data[0].show.image.medium;
//    document.body.append(img);
   
})
const makeImages = (shows) => {
    for (let result of shows) {
        if(result.show.image){
          const img = document.createElement('img');
          img.src = result.show.image.medium;
          document.body.append(img);  
        }
            
    }
}