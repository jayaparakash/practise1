import { useReducer } from "react"

export const Red = ()=>{

    let [setting,dispatch] = useReducer(redFun,{
        sms:true,
        notification:false,
        push:true
    })

    function redFun(state,action){
        return {...state,[action]:!state[action]}
    }

    return(
        <>

<lable>sms</lable>         
<input type="checkbox" checked={setting.sms}   onClick={()=>dispatch('sms')} /><br />
<lable>notification  </lable>
<input type="checkbox"  checked={setting.notification} onClick={()=>dispatch('notification')}/><br />
<lable>push</lable>
<input type="checkbox" checked={setting.push}  onClick={()=>dispatch('push')}/><br />

<br /><br /><br />
<p>sms{setting.sms ? 'NO' : 'YES'}</p>                   
<p>notification{setting.notification ? 'NO' : 'YES'}</p> 
<p>push{setting.push ? 'NO' : 'YES'}</p> 






    {/* <h2>Count : {count}</h2> */}
{/* 
    <button className="btn btn-primary" onClick={()=>dispatch({action:"INC"  ,payload:5})} >INC</button>
    <button className="btn btn-danger"  onClick={()=>dispatch({action:"DEC"  ,payload:5})} >DEC</button>
    <button className="btn btn-danger"  onClick={()=>dispatch({action:"RESET",payload:5})} >DEC</button> */}

        </>
    )
}






























// import { useReducer } from "react";

// function Red() {
//   const [settings, dispatch] = useReducer(reducer, {
//     email: true,
//     sms: false,
//     push: true,
//   });

//   function reducer(state, action) {
//   return {...state, [action]:!state[action],};
// }

//   return (
//     <div>
//       <h2>Dashboard Settings</h2>
//       <label>
//         Email Notifications
//         <input
//           type="checkbox"
//           checked={settings.email}
//           onChange={() => dispatch("email")}
//         />
//       </label>

//       <br />

//       <label>
//         SMS Notifications
//         <input
//           type="checkbox"
//           checked={settings.sms}
//           onChange={() => dispatch("sms")}
//         />
//       </label>

//       <br />

//       <label>
//         Push Notifications
//         <input
//           type="checkbox"
//           checked={settings.push}
//           onChange={() => dispatch("push")}
//         />
//       </label>

//       <h3>Current Settings</h3>
//       <p>Email: {settings.email ? "ON" : "OFF"}</p>
//       <p>SMS: {settings.sms ? "ON" : "OFF"}</p>
//       <p>Push: {settings.push ? "ON" : "OFF"}</p>
//     </div>
//   );
// }

//  export default Red


