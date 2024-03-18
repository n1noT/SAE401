import Pricing from '../ui/Pricing';
import { useLoaderData } from "react-router-dom";
import { fetchPricingData } from "../lib/loaders.js";

export async function loader(){
    let pricingData = await fetchPricingData();
    return pricingData;
}

export default function Buy() {
    
    const pricing = useLoaderData();

    return (
      <div className="flex flex-col space-y-5 items-center my-20">
        <Pricing {...pricing}/>
      </div>
    );
  }