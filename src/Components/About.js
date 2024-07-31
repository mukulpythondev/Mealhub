import UserClass from "../Components/UserClass";
import User from "./User";

const About = () => {
    return (
        <div className="p-8">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>
            <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
            {/* <User/> */}
            <UserClass name={"Mukul Rana"} role={"SDE-1"} />
        </div>
    );
};

export default About;
