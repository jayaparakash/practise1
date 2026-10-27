export const ChildB = ({update,count})=>{
    return(
        <>
        <div className="container text-light p-5 bg-dark text-center">
            <h2>This is Component B</h2>
            <h3>CountValue : {count} </h3>
                <button className="btn btn-outline-light" onClick={()=>update(count+1)}>update</button>
        </div>
        </>
    )
}