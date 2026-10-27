import React, { Suspense } from 'react'


let ProductsData= React.lazy(()=> import('../Features/ProductsData'))
export default function Product() {
  return (
    <div>
      <Suspense fallback={<center>......Loading</center>}>
        <ProductsData />
      </Suspense>
    </div>
  )
}
