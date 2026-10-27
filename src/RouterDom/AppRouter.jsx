import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Form from '../pages/Form'
import Product from '../pages/Product'
import SingleP from '../Features/SingleP'


export default function AppRouter() {
    return (
        <div>
             <Suspense fallback={<>.....loading</>}>
            <Routes>
                <Route path='/' element={<Home />} />
               
                 <Route path='/products' element={<Product />} />
                 <Route path='/products/:id' element={<SingleP />} />
               
                <Route path='/cart' element={<Cart />} />
                 <Route path='/userform' element={<Form />} />
            </Routes>
             </Suspense>
        </div>
    )
}
