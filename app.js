let input = document.querySelector("#search");
let showdiv = document.querySelector('.shows')
let searchForm = document.querySelector('.search-form')


searchForm.addEventListener("submit",async (e)=>{ //e is a event object 
    e.preventDefault(); //Prevents form from refreshing the page.
    if(input.value != ""){ // Checking if the input is empty.
        try {
            let result = await axios.get(`http://api.tvmaze.com/search/shows?q=${input.value}`)
            createImages(result.data)//result.data is an array
            console.log(result); // You can look at the result from the api in the console
        }
        catch (error) {
            console.log(error);
        }
    }
})

const createImages = (shows)=>{//shows is an array
    for(show of shows){ 
        if (show.show.image) { // checking if there is an image for the current show
            let image = document.createElement('img')
            image.src = show.show.image.medium // show.show.image.medium contains the url of the image
            showdiv.append(image) //we attach the images to an empty div that we created in html
        }
    };
}

