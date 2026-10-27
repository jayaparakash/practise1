import { useEffect, useState } from "react"

import { AnimatePresence , motion } from "framer-motion"
import { NavLink } from "react-router-dom"
export default function ProductData() {

  let [productsD,setProducts] = useState([])

  let [search,setSearch] = useState("")

  let [categorylist,setCategorylist] = useState([])
  
  let [category,setCategory] = useState('')

  let [page,setPage] = useState(1)

  let [btn,setBtn] = useState(0)

  let totalProducts = 10;

  useEffect(()=>{
    async function CateApi() {
      let dataProducts = await fetch('https://dummyjson.com/products/category-list')
       let cate = await dataProducts.json()
       setCategorylist(cate)      
    }
    CateApi()
  },[])

    useEffect(()=>{
  async function rednderApi() {

    let api ;
    if (category) {
        api = `https://dummyjson.com/products/category/${category}`
    } else if(search){
        api = `https://dummyjson.com/products/search?q=${search}`
    }else {
      api =  `https://dummyjson.com/products?limit=100`
    }

    let apiProducts = await fetch(api)
    let {products} =  await apiProducts.json()
 
    let productsLength = products.length || []
    setBtn(productsLength)

    let pagination = products.slice((page-1)*totalProducts , page*totalProducts)
    setProducts(pagination)  
    }
    rednderApi()
  },[category,search,page])

  let viewbtns = Math.ceil(btn/totalProducts)

  let cardVarient = {
    hidden:{opacity:0,y:50},
    visiable:{opacity:1,y:0}
  }

  return (
<>

  <div className="container">   
    <div className="row  my-5 justify-content-around">
      <div className="col-5">
        <input type="text" className="form-control"
          value={search}
            onChange={(e)=>{
            setSearch(e.target.value)
            setCategory('')
            setPage(1)
          }}
          />
      </div>
      <div className="col-5">
        <select  className="form-control text-center"
          onChange={(e)=>{
            setSearch('')
            setCategory(e.target.value)
            setPage(1)
          }}
        >
          <option value="">Category-list</option>
          {
            categorylist.map((v,i)=>
            <option key={i} value={v}>{v}</option>
          )
          }
        </select>
      </div>
    </div>
  <div className="row gy-3 my-5 justify-content-evenly">
    <AnimatePresence>
          {
            productsD.map((pro,i) =>
            <motion.div
            key={pro.id}
              variants={cardVarient}
              initial='hidden'
              animate='visiable'
              exit={{opacity:0,y:-50}}
              transition={{duratrion:5, delay:i*0.5}}
              class="card"
              style={{width: "20rem" , height:'350px'}} 
               > 
  <NavLink className='nav-link' to={`/products/${pro.id}`}>
    <img src={pro.thumbnail} height={'150px'} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{pro.title}</h5>
    <p class="card-text">{pro.description.length > 50 ? pro.description.slice(0,50)+'....' : pro.description}</p>
  </div> 
  </NavLink>
</motion.div>
            )
          }  
      </AnimatePresence>    
  </div>
  <div className="row justify-content-center">
          {
            viewbtns > 1 && (
              Array.from({length:viewbtns}, (_,i)=>i+1).map(btn =>
                <div className="col-1">
                  <button className="btn btn-primary" onClick={()=>setPage(btn)}>{btn}</button>
                </div>
              )
            )
          }
  </div>
    </div>
</>
  )
}