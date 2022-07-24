import { createContext, useState, useEffect } from 'react';

import { getCollectionAndDocuments } from '../../Utils/firebase/firebase.utils.js';

export const CategoriesContext = createContext({
    categoriesMap: {}
});


export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    console.log(categoriesMap)
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCollectionAndDocuments();
            setCategoriesMap(categoryMap);
            console.log(categoryMap);
        };
        getCategoriesMap();

    }, []);
    const value = {categoriesMap};
    return (
        <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    )
}