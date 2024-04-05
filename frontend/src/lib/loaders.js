export async function fetchAllMoviesData() {
    let answer = await fetch('http://localhost:8080/api/movies');
    let data = await answer.json();
    return data; 
}


export async function fetchAllCategoriesData() {
    let answer = await fetch('http://localhost:8080/api/categories');
    let categories = await answer.json();
    return categories; 
}

export async function fetchSearch(searched) {
    let answer = await fetch('http://localhost:8080/api/movies/searchContent?search=' + searched);
    let data = await answer.json();
 
    return data; 
}

export async function fetchOneMovie(movieId){
    let answer = await fetch('http://localhost:8080/api/movie/' + movieId, { credentials:'include', redirect: 'follow'});
        
        // Vérifier si la réponse est une redirection
        if (answer.redirected) {
            // Si la réponse est une redirection, récupérer l'URL de redirection
            const redirectUrl = answer.url;
            // Rediriger vers l'URL de redirection
            window.location.href = redirectUrl;
            return; // Arrêter l'exécution de la fonction
        }

        // Si ce n'est pas une redirection, traiter la réponse comme d'habitude
        const responseData = await answer.json();
        return responseData;

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