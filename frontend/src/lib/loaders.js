import { getCookie } from "./utils";

export async function fetchAllMoviesData() {
    let answer = await fetch('https://shiny-eureka-979x44wgr6jwc7q4x-8080.app.github.dev/api/movies');
    let data = await answer.json();
    return data; 
}


export async function fetchAllCategoriesData() {
    let answer = await fetch('https://shiny-eureka-979x44wgr6jwc7q4x-8080.app.github.dev//api/categories');
    let categories = await answer.json();
    return categories; 
}

export async function fetchSearch(searched) {
    let answer = await fetch('https://shiny-eureka-979x44wgr6jwc7q4x-8080.app.github.dev//api/movies/searchContent?search=' + searched);
    let data = await answer.json();
    return data; 
}

export async function fetchOneMovie(movieId){
    let user = getCookie('email');

    if(user){
        let answer = await fetch('https://shiny-eureka-979x44wgr6jwc7q4x-8080.app.github.dev//api/movie/' + movieId, { credentials:'include'});

        const responseData = await answer.json();
        return responseData;

    }
    else{
        window.location.href = 'https://shiny-eureka-979x44wgr6jwc7q4x-8080.app.github.dev//login'
    }


}

export async function fetchPlaylist(){
    let user = getCookie('email');

    if(user){
        let answer = await fetch('https://shiny-eureka-979x44wgr6jwc7q4x-8080.app.github.dev//api/playlist', { credentials:'include'});

        const responseData = await answer.json();
        
        let formatData = [];

        for(let mov of responseData){
            formatData.push(mov.movie)
        }

        return formatData;

    }
    else{
        window.location.href = 'https://shiny-eureka-979x44wgr6jwc7q4x-8080.app.github.dev//login'
    }


}

export async function fetchCategoryData(catId) {
    let globalData = await fetchAllMoviesData()
    let catData = []
    for(let movie of globalData){
       for(let i = 0; i<movie.category.length; i++){
        if(movie.category[i].id == catId){
            catData.push(movie)
        }
       }
    }
    return catData; 
}


export async function fetchNavbar(navName){
    let answer = await fetch('/src/lib/data/navbar-data.json');
    let data = await answer.json();
    return data[navName];
}