import { Fragment, useContext } from 'react';

import { CategoriesContext } from '../../component/context/categories.context';

import CategoryPreview from '../../component/category-preview/category-preview.component';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
     console.log(categoriesMap)
    return (
       <Fragment>
            {Object.keys(categoriesMap).map((title) => 
                {
                    const products = categoriesMap[title];
                    return (<CategoryPreview key={title} title={title} products={products} />)
                }
            )}
    </Fragment>
    )
}

export default CategoriesPreview;