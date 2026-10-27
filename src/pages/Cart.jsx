import { AnimatePresence,motion } from 'framer-motion'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DEC, INC } from '../Features/cart/CartSlice'

export default function Cart() {

  let cart = useSelector(state=>state.cart)

  let dispatch = useDispatch()

    let cardVarient = {
    hidden:{opacity:0,y:50},
    visiable:{opacity:1,y:0}
  }

  console.log(cart[0].quantity);
  

  console.log(INC());



  return (
    <div>
      <h1>THis is cartpage</h1>
            {
              cart.map(s=>
                  <div className="row gy-3 my-5 justify-content-evenly">
    <AnimatePresence>
            <motion.div
              variants={cardVarient}
              initial='hidden'
              animate='visiable'
              exit={{opacity:0,y:-50}}
              transition={{duratrion:5, delay:0.5}}
              class="card"
              style={{width: "20rem" , height:'450px'}}
               > 
     <img src={s.thumbnail} height={'150px'} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{s.title}</h5>
    <p class="card-text">{s.description}</p>
    <mark>{s.quantity}</mark>
     <div>
   <button className="btn btn-primary" onClick={()=>dispatch(INC(s.id))}>INC</button>
   <button className="btn btn-warning"  onClick={()=>dispatch(DEC(s.id))} >DEC</button>
 
 </div>
  </div> 


</motion.div>
          
      </AnimatePresence>    
  </div>



              )
            }

    </div>
  )
}
