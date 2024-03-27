import {fakeNetwork} from './utils.js'


export async function fetchAllMoviesData() {
    let answer = await fetch('http://localhost:8080/api/movies');
    let data = await answer.json();
    console.log(data)
    return data; 
}

let globalData = await fetchAllMoviesData();

export async function fetchAllCategoriesData() {
    let answer = await fetch('http://localhost:8080/api/categories');
    let categories = await answer.json();
    return categories; 
}

export async function fetchCategoryData(catId) {
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


export async function fetchOurTeams(teamName){
    await fakeNetwork();
    let answer = await fetch('/src/lib/data/teams-data.json');
    let data = await answer.json();
    return data[teamName];
}

export async function fetchTestimonialData(teamName){
    let answer = await fetch('/src/lib/data/testimonial-data.json');
    let data = await answer.json();
    data = data[teamName];
    // choose 3 random testimonies
    let testimonies = [];
    for(let i=0; i<3; i++){
        let index = Math.floor(Math.random() * data.length); // random index
        testimonies.push(data[index]); // add to testimonies
        data.splice(index, 1); // remove from data to avoid duplicates
    }
    return testimonies;
}

export async function fetchPricingData(){
    let answer = await fetch('/src/lib/data/pricing-data.json');
    let data = await answer.json();
    return data;  
}

export async function fetchNavbar(navName){
    let answer = await fetch('/src/lib/data/navbar-data.json');
    let data = await answer.json();
    return data[navName];
}