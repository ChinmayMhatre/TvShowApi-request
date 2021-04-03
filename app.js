let input = document.querySelector("#search");
let showdiv = document.querySelector('.shows')
let searchForm = document.querySelector('.search-form')


searchForm.addEventListener("submit",async (e)=>{
    e.preventDefault();
    if(input.value != ""){
        try {
            let result = await axios.get(`http://api.tvmaze.com/search/shows?q=${input.value}`)
            makeImages(result.data)
            console.log(result);
        }
        catch (error) {
            console.log(error);
        }
    }
})

const makeImages = (shows)=>{
    for(show of shows){
        if (show.show.image) {
            let img1 = document.createElement('img')
            img1.src = show.show.image.medium
            showdiv.append(img1)
        }
    };
}