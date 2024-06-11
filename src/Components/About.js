import UserClass from "../Components/UserClass"
import User from "./User"

const About= ()=>{
    
    return(
        <div>
            <h1> About Us</h1>
            <h3>Our Team </h3>
            {/* <User/> */}
            <UserClass name={"Mukul Rana"} role={"SDE-1"} />
        </div>
    )
}
export default About