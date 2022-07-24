import { useContext, useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import ProductCard from '../../component/product-card/product-card.component'

import { CategoriesContext } from '../../component/context/categories.context';


import './category.styles.scss';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState();
    
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);
    
    console.log(categoriesMap)
    console.log(category);
    console.log(products);
    return (
    <>
        <div className='category-title'>{category.toUpperCase()}</div>
        <div className='category-container'>
            {
                products && 
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            }

        </div>
    </>
    )
};

export default Category;