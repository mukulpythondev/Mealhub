import { useEffect } from "react"

const User= ()=>{
    useEffect(() => {
          const timer=  setInterval(() => {
                console.log("React OP")
            }, 1000);
     // This will unmount the component
    //   return () => {
             clearInterval(timer)
    //   }
    }, [])
    
    return (

        <div>
            <h1>Name : Mukul Rana</h1>
            <h3> Role : SDE </h3>
            <h3> B.Tech 1st Yr</h3>
        </div>
    )
}
export default User