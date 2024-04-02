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

export async function fetchSearch() {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', 'http://localhost:8080');
    headers.append('Access-Control-Allow-Credentials', 'true');

    headers.append('GET', 'POST', 'OPTIONS');

    let answer = await fetch('http://localhost:8080/api/movies/searchContent?search=Yannick', {
      //mode: 'no-cors',
      credentials: 'include',
      method: 'POST',
      headers: headers
    });
    let data = await answer.json();
    console.log(data)
    return data; 
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