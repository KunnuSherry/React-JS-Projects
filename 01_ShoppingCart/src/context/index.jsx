//create context
//provide the state to context
//wrap context in root component
//consume the context using useContext

import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({children}){
    const[loading, setLoading] = useState(true);
    const [listOfProducts, setListOfProducts] = useState([]);

    async function fetchListOfProducts() {
        const apiRespone = await fetch('https://dummyjson.com/products');
        const result = await apiRespone.json()
        if(result && result?.products){
            setListOfProducts(result?.products);
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchListOfProducts();
    }, [])

    return(
        <ShoppingCartContext.Provider value={{listOfProducts, loading}}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export default ShoppingCartProvider