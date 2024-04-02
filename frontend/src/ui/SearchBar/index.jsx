export default function SearchBar(){
    

    return (
        <>
        <form action="http://localhost:8090/searchContent">
            <input type="search" placeholder="Rechercher"/>
            <button type="submit" >Rechercher</button>
        </form>
        </>
    )
}