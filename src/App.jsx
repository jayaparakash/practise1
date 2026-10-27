import Footer from "./components/Footer"
import Header from "./components/Header"
import Counter from "./customhooks/Counter"
import Ref from "./hooks/useRef"
import AppRouter from "./RouterDom/AppRouter"
 
  export const App = ()=>{
  return(
    <>
   <Header /> 
   {/* <Ref /> */}
{/* <Red /> */}
     <AppRouter /> 
     {/* <Counter /> */}
   <Footer /> 
    </>
  )
}