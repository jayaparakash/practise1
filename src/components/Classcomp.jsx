import React, { useEffect, useState } from 'react'
export default function Classcomp() {

    let [count,setCount] = useState(0)
    let [data,setData]= useState('')
             console.log('component render');
             function btn() {
                console.log('re-render');
                setCount(count+1)
             }


    useEffect(()=>{
    async function data() {
        let apid = await fetch('https://dummyjson.com/products')
        console.log(apid);
    }
    data()
    },[count,data])
    


  return (
    <div>
      <center>
    <div className="col-5">
        {count}
        <input type="text" className='my-5 form-control' onChange={(e)=>setData(e.target.value)}/>
            <h3>{data}</h3>
        <button className='btn btn-primary' onClick={btn}>INC</button>
    </div>
      </center>
    </div>
  )
}