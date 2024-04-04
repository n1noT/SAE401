import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");

    const navigate = useNavigate();

    function searchRedirect() {
        navigate(`/searchContent/${searchTerm}`);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            searchRedirect();
      };
    }

    return (
        <div className="flex gap-2 justify-center items-center p-2 h-full border-2 border-button-secondary-bg rounded-md w-full" >
            <input 
                id="searchInput" 
                name="search" 
                type="search" 
                placeholder="Rechercher" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="h-full bg-main-bg text-clr-T-base focus-visible:outline-none w-full"
                onKeyPress={handleKeyPress}
            />
            <button onClick={searchRedirect} className="h-6 w-6"><img src="/assets/icon/search.svg" alt="bouton recherche" className="h-6 w-6"/></button>
        </div>
    );
}