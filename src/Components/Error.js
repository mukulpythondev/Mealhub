import { useRouteError } from "react-router-dom"
const Error= ()=>{
    const err= useRouteError()
    console.log(err)
    return (
        <div>
            <h3>Oops! Dev you have unlocked some secret gate that does not exist. </h3>
            <h4>  {err.status} - {err.statusText} </h4>
        </div>
    )
}
export default Error