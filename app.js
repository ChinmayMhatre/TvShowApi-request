let input = document.querySelector("#search");
let showdiv = document.querySelector('.shows')
let searchForm = document.querySelector('.search-form')


searchForm.addEventListener("submit",async (e)=>{
    e.preventDefault();
    if(input.value != ""){
        try {
            let result = await axios.get(`http://api.tvmaze.com/search/shows?q=${input.value}`)
            createImages(result.data)
            console.log(result);
        }
        catch (error) {
            console.log(error);
        }
    }
})

const createImages = (shows)=>{
    for(show of shows){
        if (show.show.image) {
            let image = document.createElement('img')
            image.src = show.show.image.medium
            showdiv.append(image)
        }
    };
}

