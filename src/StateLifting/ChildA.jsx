export const ChildA = ({count})=>{
    return(
        <>
        <div className="container p-5 bg-light text-center my-5">
            <h2>This is Component A</h2>
            <h3>CountValue : {count} </h3>
        </div>
        </>
    )
}