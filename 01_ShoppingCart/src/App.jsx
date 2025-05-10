import { Fragment } from "react"
import {Route, Routes} from "react-router-dom"
import ProductListPage from "./pages/productList"
import ProductDetailsPage from "./pages/productDetails"
import Cart from "./pages/cartList"

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path="/products" element={<ProductListPage/>}/>
        <Route path="/product-details/:id" element={<ProductDetailsPage/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Fragment>
  )
}

export default App
