import  { useState } from 'react'

export default function Home() {

  let [count,setCount] = useState(0)

  return (
    <div>
    <center>
      <h1>Counter: {count} </h1>
      <button className="btn btn-primary"onClick={()=>setCount(count+1)} >INC</button>
      <button className="btn btn-danger" onClick={()=>setCount(count-1)} >DEC</button>
    </center>

  {/* // function INC(){
  //   setCount(count+1)
  // }

  

  // function DEC(){
  //   setCount(count-1)
  // } */}



      {/* 
        useState
            which is state management hook in react function component

            which create the state and update the state 

              let [state ,setState] = useState(0)

                  state => type variable it stores components related data 0

                  setState => function helps to update the stateValue 0,1,2,3,4,5 , ''

                        
      */}

















    {/* 
      LifeCycle Methods or components in react 

      which is three phases / stages 

        mounting phase
            creating a component adding to ui 
              with help of state => 
        updating phase
              chaning / updating the component state
        unmounting phase
               removeing the data / state 


    state 
      state which stores the data that it is managed by the component 

        props 
          a data coming into the component
          which is immutable cant be changes 
          one-way-databinding
        vs 
        
        state 

        data which managed / created inside the component
        state is mutable which can be updated /changed


        class component
        mounting
           constructor()
           staticStateGetdireviedFromProps()
           render()
           componentdidmount()
        updateing
         constructor()
          staticStateGetdireviedFromProps()
          componetshouldUpdate()
          render()
          getsnapShotBeforeupadte()
          componentdidUpdate() 
        unmounting 
          componentwillunmount()
        vs
        
        function component 
          stateless components , dummycomponents
        mounting 
          useState
          useEffect
        updatingphase
          useEffect
          usememo
          useCallBack
          useReducer
          useState
        umounting 
          useEffect 

    */}
    </div>
  )
}
