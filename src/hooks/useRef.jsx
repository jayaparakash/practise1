import React, { useEffect, useRef, useState } from 'react'

export default function Ref() {

    // let [count,setCount] = useState(0)

    let refData = useRef( )
    let playD =  ()=> refData.current.play()
    let pauseD = ()=> refData.current.pause()
  
    useEffect(()=>{
        // refData.current.focus()

        // refData.current = count

    },[])

  return (
    <div>
      
      <div className="m-5">
        <center>
            <video ref={refData} src="https://w3schools.com/html/mov_bbb.mp4" controls></video>

    <button className="btn btn-primary" onClick={()=>playD()} >play</button>
    <button className="btn btn-primary" onClick={()=>pauseD()} >pause</button>


<br /><br />

            {/* <h2>currentValue : {count}</h2>
            <h2>PreviousValue: {refData.current}</h2> */}

            {/* <button className="btn btn-primary" onClick={()=>setCount(count+1)}>update</button> */}


            <div className="col-5">
                <input type="text"  className="form-control" />
                </div>
            <div className="col-5">
                <input type="text" className="form-control" />
                </div>
        </center>
      </div>
    </div>
  )
}
