//create context
//provide the state to context
//wrap context in root component
//consume the context using useContext

import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext(null);

function ShoppingCartProvider({children}){
    const [loading, setLoading] = useState(true);
    const [listOfProducts, setListOfProducts] = useState([]);
    const [productDetails, setProductDetails] = useState(null);
    const [cartItems, setCartItems] = useState([])

    async function fetchListOfProducts() {
        const apiRespone = await fetch('https://dummyjson.com/products');
        const result = await apiRespone.json()
        if(result && result?.products){
            setListOfProducts(result?.products);
            setLoading(false)
        }
    }

    function handleAddToCart(getProductDetails){
        console.log(getProductDetails);
        let copyExisitingCartItems = [...cartItems]
        const findIndexOfCurrentItem = copyExisitingCartItems.findIndex(cartItem=>cartItem.id===getProductDetails.id)
        console.log(findIndexOfCurrentItem);
        if(findIndexOfCurrentItem===-1){
            copyExisitingCartItems.push({
                ...getProductDetails,
                quantity : 1,
                totalPrice : getProductDetails?.price
            })
        }else{

        }
        console.log(copyExisitingCartItems);
        setCartItems(copyExisitingCartItems);
        localStorage.setItem("cartItems", JSON.stringify(copyExisitingCartItems));
        
        
    }

    useEffect(()=>{
        fetchListOfProducts();
    }, [])

    return(
        <ShoppingCartContext.Provider value={{listOfProducts, loading, setLoading, setProductDetails, productDetails, handleAddToCart}}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export default ShoppingCartProvider