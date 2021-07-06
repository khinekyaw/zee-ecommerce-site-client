import "./App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Navbar from "./components/Navigations/Navbar/Navbar"
import LanguageProvider from "./context/LanguageProvider"
import Footer from "./components/Footer/Footer"
import CartProvider from "./context/CartProvider"
import ModalProvider from "./context/ModalProvider"
import AddedToCartModal from "./components/Cart/AddedToCartModal/AddedToCartModal"
import HomePage from "./routes/HomePage"
import ProductDetails from "./routes/ProductDetails"
import Cart from "./routes/Cart"

function App() {
  return (
    <LanguageProvider>
      <ModalProvider>
        <CartProvider>
          <BrowserRouter>
            <header>
              <Navbar />
              <AddedToCartModal />
            </header>
            <main>
              <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/product/:id' component={ProductDetails} />
                <Route path='/shopcart' component={Cart} />
              </Switch>
            </main>
            <Footer />
          </BrowserRouter>
        </CartProvider>
      </ModalProvider>
    </LanguageProvider>
  )
}

export default App
