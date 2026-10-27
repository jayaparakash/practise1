import { useState } from "react"
import { ChildA } from "./ChildA"
import { ChildB } from "./ChildB"

export const ParentComp = ()=>{

    let [count,setCount] = useState(0)

    function uptoDate(){
        setCount(count+1)
    }

    return(
        <>


<center>
    <ChildA  count={count} />
    <ChildB  count={count} update={setCount} />
</center>








          
        </>
    )
}

  {/* statelifting  
                    Were two or more child components need access / wants the same state
                    state will  be lift up and create inside of comman ancester component
            */}
