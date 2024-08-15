import { useState } from "react";
import Products from "./Products";
import Sidebar from "./Sidebar";
import data from '../data';

function Home() {
  const [item, setItem] = useState(data);
  const [cartItems, setCartItems] = useState([])

  // add products to the sidebar
  const addProducts = (product) => {
    const exist = cartItems.find((element) => element.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((element) => element.id === product.id ? { ...exist, qty: exist.qty + 1 } : element)
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }


  // remove or decrease items from sidebar
  const removeCount = (product) => {
    const exist = cartItems.find((element) => element.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((element) => element.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((element) => element.id === product.id ? { ...exist, qty: exist.qty - 1 } : element)
      )
    }
  }

  // increase items of sidebar
  const increaseCount = (product) => {
    const exist = cartItems.find((element) => element.id === product.id);
    if(exist){
      setCartItems(cartItems.map((element)=> element.id === product.id ? {...exist , qty : exist.qty + 1} : element))
    }
  }

  return (
    <main className="container grid lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-1">
      <div className="content row-span-1 lg:col-span-3  md:col-span-2 md:m-20 max-sm:mx-auto max-sm:ml-20"><Products item={item} addProducts={addProducts} /></div>
      <div className="sidebar row-span-1 lg:col-span-1  md:col-span-1"><Sidebar cartItems={cartItems} setCartItems={setCartItems}  removeCount={removeCount} increaseCount={increaseCount}/></div>
    </main>

  )

}

export default Home