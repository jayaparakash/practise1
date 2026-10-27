import React, { useState } from 'react'
import SignUp from './SignUp'
import Login from './Login'

export default function Form() {
    let [form,setForm] = useState(false)
  return (
    <div>
      <section class="vh-100" style={{backgroundColor:"#eee"}}>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style={{borderRadius: '25px'}}>
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
        <button className="btn btn-primary" onClick={()=>setForm(false)}>SignUp</button>
        <button className="btn btn-primary" onClick={()=>setForm(true)}>Login</button>
            { form ?  <Login />  : <SignUp/>}
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
