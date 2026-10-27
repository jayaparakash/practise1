import axios from 'axios'
import { AnimatePresence,motion } from 'framer-motion'
import  { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ADD, REMOVE } from './cart/CartSlice'

export default function SingleP() {

  let dispatch = useDispatch()

    let [s,setS] = useState({})
    let {id} = useParams()



    useEffect(()=>{
        async function data() {
            let {data}  = await axios.get(`https://dummyjson.com/products/${id}`)
            console.log(data);
            setS(data)
        }
        data()
    },[])

          let cardVarient = {
    hidden:{opacity:0,y:50},
    visiable:{opacity:1,y:0}
  }

  return (
    <div>
        
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
    <button className="btn btn-primary" onClick={()=>dispatch(ADD({...s,quantity:1}))} >ADD</button>
    <button className="btn btn-warning" onClick={()=>dispatch(REMOVE(s.id))} >REMOVE</button>
  </div> 
 
</motion.div>
          
      </AnimatePresence>    
  </div>

    </div>
  )
}
