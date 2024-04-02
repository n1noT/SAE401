import { useLoaderData } from "react-router-dom"
import GridMovie from "../ui/GridMovie"
import { fetchSearch } from "../lib/loaders"

export async function loader({params}){
    let data = await fetchSearch(params.searched);
    return data
}

export default function SearchContent(){

    let dataSearch = useLoaderData()
    
    if(dataSearch.length > 0){
        return(
            <>
                <GridMovie data={dataSearch}/>
            </>
        )
    }
    else{
        return(
            <>
                <h3 className="text-clr-T-base">Oups ! Nous n'avons pas ce film</h3>
            </>
        )
    }
    
}