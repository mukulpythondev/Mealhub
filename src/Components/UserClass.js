import React from "react";
import UserContext from "../Utils/Context";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count1: 1,
            userData: null // State to store fetched user data
        };
        console.log("Child Constructor");
    }

    async componentDidMount() {
        console.log("Child Mount");
        const data = await fetch("https://api.github.com/users/mukulpythondev");
        const json = await data.json();
        console.log(json);
        this.setState({ userData: json });
    }
      componentDidUpdate(){
        console.log("Component is Updated")
      }
      componentWillUnmount(){
        console.log("Component will be unmounted ")
      }
    render() {
        console.log("Child Render");
        const { name, role } = this.props;
        const { count, count1, userData } = this.state;
        return (
            <div>
                {/* how to use Usecontext inside class based component */}
                {/* <UserContext.Consumer>
                    {(data)=>{console.log(data)}}
                </UserContext.Consumer> */}
                <h1>Count: {count} and Second count: {count1}</h1>
                <button onClick={() => {
                    this.setState({ count: this.state.count + 1 });
                }}>Increment</button>
                <h1>Name: {name} (class)</h1>

                <h3>Role: {role}</h3>
                {userData && (
                    <>
                        <h4>@{userData.login}</h4>
                        <img src={userData.avatar_url} alt="User Avatar" style={{ width: '100px', borderRadius: '50%' }} />
                        <p>{userData.bio}</p>
                    </>
                )}
            </div>
        );
    }
}

export default UserClass;
