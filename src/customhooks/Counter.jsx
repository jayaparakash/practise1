
import useCount from './useCount'

export default function Counter(){

    // let {INC,DEC,count} = useCount()
        let [theme,updateTheme] = useCount('themeColor','light')


  return (
    <div style={{height:'90vh'}}>

        <div className={`${theme == 'light' ? 'bg-dark':'bg-light'} h-100`} > 

            <button className="btn btn-primary" 
                onClick={()=>updateTheme(theme == 'light' ? 'dark' :'light')}
            >
                {theme == 'light' ? 'light' :'darkmode'}
            </button>

      </div>
    {/* <center> */}


        {/* <h1>  count : {count}</h1>
        <button className="btn btn-primary" onClick={INC} >INC</button>
        <button className="btn btn-danger"  onClick={DEC} >DEC</button> */}
    {/* </center> */}
    </div>
  )
}
