import Proptype from "prop-types"

function UserGreeting(props){

    // if (props.isLoggedin){
    //     return <h2>welcome on board</h2>
    // }
    // else{
    //     return <h2>please log in to continue</h2>
    // }
    const welcomemsg = <h2 className="welcome-msg">welcome {props.username}</h2>
    const loginmsg = <h2 className="login-msg">please login to continue</h2>

    return(props.isLoggedin ? welcomemsg : loginmsg);
}
UserGreeting.Proptype = {
    isLoggedin: Proptype.bool,
    username : Proptype.string,
}
UserGreeting.defaultProps ={
    isLoggedin: false,
    username:"",
}
export default UserGreeting