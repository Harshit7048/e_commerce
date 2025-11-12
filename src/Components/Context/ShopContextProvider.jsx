import React from "react";
import ShopContext from "./ShopContext";
import all_products from '../Assets/all_product'

export default function ShopContextProvider(props) {
    const contextValue = { all_products }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}