import Student from "./student"
import profilepic from "./assets/ankush_white_profile.png"
function Card(){
    return(
        <div className="card">
            <img src={profilepic} alt="ankush" className="card-img"/>
            <h2 className="card-title">ankush</h2>
            <p className="card-text">Developer</p>
        </div>
    )
}
export default Card