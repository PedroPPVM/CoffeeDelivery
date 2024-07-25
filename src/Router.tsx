import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { ShopCart } from './pages/ShopCart'
import { DefaultLayout } from './layouts/DefaultLayout'
import { OrderConfirmed } from './pages/OrderConfirmed'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/shop-cart" element={<ShopCart />} />

        <Route path="/order-confirmed" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  )
}
