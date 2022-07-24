import { Routes, Route } from 'react-router-dom';
import Home from '../src/Routes/Home/home.component';
import Navigation from './Routes/Navigation/navigation.component';
import Authentication from './Routes/Authentication/authentication.component';
import Shop from './Routes/Shop/shop-data.component';
import CheckOut from './Routes/Checkout/checkout.component';
import Category from './Routes/category/category.component';
import CategoriesPreview from './Routes/Categories-preview/categories-preview.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} />
      {/* <Route path='shop' element={<Shop />} /> */}
      <Route path='shop' element={<CategoriesPreview />} />
      <Route path='shop/:category' element={<Category />} />
      {/* <Route path=":category" element={<Category />}  /> */}
      <Route path='auth' element={<Authentication />} />
      <Route path='checkout' element={<CheckOut />} />
      </Route>
    </Routes>
  );
}

export default App;