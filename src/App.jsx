import { useState, lazy, Suspense } from 'react'
import './App.css'
import Home from './Pages/Home.page'
// import Product from './Pages/Product.page'
import Baselayout from './Layout/Base.layout'
import DashbordLayout from './Layout/Dashbord.layout'
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from "react-router-dom";
// import Cart from './Pages/cart.page'
import Pageloading from '@/Comman/Pageloading'
const Product = lazy(() => import("./Pages/Product.page"))
const Products = lazy(() => import("./Pages/Products.page"))
const Cart = lazy(() => import("./Pages/Cart.page"))
const Deliverd = lazy(() => import("./Pages/Deliverd.page"))
const Whatnew = lazy(() => import("./Pages/Whatnew"))
const Bestdeal = lazy(() => import("./Pages/Bestdeal.page"))
const Category = lazy(() => import("./Pages/Category.page"))
const CategoryL2Page = lazy(() => import('./Pages/CategoryL2page'))
const OrderL2 = lazy(() => import("./Pages/Order.page"))
const Account = lazy(() => import("./Pages/Account.page"))
const DashbordHomepage = lazy(() => import("./Pages/DashbordHomepage"))
const DashbordAnalyticpage = lazy(() => import("./Pages/DashbordAnalytic.page"))
const Dashbordaddproduct = lazy(() => import("./Pages/Dashbordaddproduct.page"))
const Allproductpage = lazy(() => import('./Pages/Allproduct.page'))
const DaschbordOrderPage = lazy(() => import('./Pages/DashbordOrder.page'))
const CustomerDashbord = lazy(() => import("./Pages/CustomerDashbord.page"))
const Orderspage = lazy(() => import("./Pages/Orders.page"))
const Registerpage = lazy(() => import("./Pages/Register.page"))
const Loginpage = lazy(() => import("./Pages/Login.page"))
// const Dashboard=lazy(()=>import("./"))
// new pages
const AboutUsPage = lazy(() => import('./Pages/About-us.page'))
const ContactUsPage = lazy(() => import('./Pages/Contact-us.page'))
const Feedback = lazy(() => import('./Pages/Feedback.page'))
const Privacypolicy = lazy(() => import("./Pages/Privacy-policy.page"))
const ShippingPolicy = lazy(() => import("./Pages/Shipping-policy.page"))
const NotFound = lazy(() => import('./Pages/NotFound'))




const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Baselayout />}>

        <Route index element={<Home />} />
        <Route path='/products' element={          //------> redirecting to specific product  wnat to main page
          <Suspense fallback={<><Pageloading /></>}>
            <Products />
          </Suspense>
        } />
        <Route path='/trending' element={          //------> redirecting to specific product  wnat to main page
          <Suspense fallback={<><Pageloading /></>}>
            <Products />
          </Suspense>
        } />
        <Route path='/product/:slug' element={
          <Suspense fallback={<><Pageloading /></>}>
            {/* <Order /> */}
            <Product />
          </Suspense>
        } />

        <Route path='/orders' element={<Suspense fallback={<><Pageloading /></>}>
          <Orderspage />
        </Suspense>} />


        <Route path='/order/:id' element={<Suspense fallback={<><Pageloading /></>}>
          {/* <Category /> */}
          <OrderL2 />
        </Suspense>} />
        <Route path="/collection/:slug" element={<Suspense fallback={<><Pageloading /></>}>
          <CategoryL2Page />
        </Suspense>} />
        <Route path="/collections" element={<Suspense fallback={<><Pageloading /></>}>
          <Category />
        </Suspense>} />

        {/* <Route path="/discount-deals" element={<Suspense fallback={<><Pageloading /></>}>
          <Bestdeal />
        </Suspense>} /> */}

        <Route path="/new-arrivals" element={<Suspense fallback={<><Pageloading /></>}>
          <Whatnew />
        </Suspense>} />

        <Route path="/cart" element={
          <Suspense fallback={<><Pageloading /></>}>
            <Cart />
          </Suspense>}
        />
        <Route path="/account" element={
          <Suspense fallback={<><Pageloading /></>}>
            <Account />
          </Suspense>}
        />

        {/* register and Login  */}

        <Route path="/register" element={
          <Suspense fallback={<><Pageloading /></>}>
            <Registerpage />
          </Suspense>}
        />
        <Route path="/login" element={
          <Suspense fallback={<><Pageloading /></>}>
            <Loginpage />
          </Suspense>}
        />
        {/*new routs */}
        <Route path="/about-us" element={
          <Suspense fallback={<><Pageloading /></>}>
            <AboutUsPage />
          </Suspense>}
        />

        <Route path="/contact-us" element={
          <Suspense fallback={<><Pageloading /></>}>
            <ContactUsPage />
          </Suspense>}
        />
        <Route path="/feedback" element={
          <Suspense fallback={<><Pageloading /></>}>
            <Feedback />
          </Suspense>}
        />
        <Route path="/blogs" element={
          <Suspense fallback={<><Pageloading /></>}>
            <Loginpage />
          </Suspense>}
        />

        <Route path="/blog/:slug" element={
          <Suspense fallback={<><Pageloading /></>}>
            <Loginpage />
          </Suspense>}
        />

        <Route path="/privacy-policy" element={
          <Suspense fallback={<><Pageloading /></>}>
            <Privacypolicy />
          </Suspense>}
        />
        <Route path="/shiping-policy" element={
          <Suspense fallback={<><Pageloading /></>}>
            <ShippingPolicy />
          </Suspense>}
        />


        <Route path="*" element={
          <Suspense fallback={<><Pageloading /></>}>
            <NotFound />
          </Suspense>}
        />


      </Route>



      <Route path="/dashbord" element={<DashbordLayout />} >


        <Route index element={
          <Suspense fallback={<><Pageloading /></>}>
            <DashbordHomepage />
          </Suspense>} />

        <Route path='analytic' element={
          <Suspense fallback={<><Pageloading /></>}>
            <DashbordAnalyticpage />
          </Suspense>} >
          <Route path='*' element={
            <Suspense fallback={<><Pageloading /></>}>
              <DashbordAnalyticpage />
            </Suspense>} />
        </Route>

        <Route path='addproduct' element={
          <Suspense fallback={<><Pageloading /></>}>
            <Dashbordaddproduct />
          </Suspense>} />

        <Route path='allproducts' element={
          <Suspense fallback={<><Pageloading /></>}>
            <Allproductpage />
          </Suspense>} />

        <Route path='orders' element={
          <Suspense fallback={<><Pageloading /></>}>
            <DaschbordOrderPage />
          </Suspense>} />

        <Route path='customers' element={
          <Suspense fallback={<><Pageloading /></>}>
            <CustomerDashbord />
          </Suspense>} />

      </Route>


    </>
  )
)



function App() {
  return (

    <RouterProvider router={router} />

  )

}

export default App
