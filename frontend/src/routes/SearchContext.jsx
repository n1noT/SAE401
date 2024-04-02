import { useLoaderData } from "react-router-dom"
import GridMovie from "../ui/GridMovie"
import { fetchSearch } from "../lib/loaders"

export async function loader(){
    let data = await fetchSearch();
    return data
}

export default function SearchContent(){

    let dataSearch = useLoaderData()
    
    return(
        <>
            <GridMovie data={dataSearch}/>
        </>
    )
}