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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 mt-4 px-2">
                <GridMovie data={dataSearch}/>
            </div>
        )
    }
    else{
        return(
            <div className="flex h-32 justify-center items-center">
                <h3 className="text-clr-T-base text-wrap font-button">Oups ! Nous n'avons pas ce film.</h3>
            </div>
        )
    }
    
}