import Proptype from 'prop-types'

function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}
// will give warning in consol
Student.prototype = {
    name:Proptype.string,
    age:Proptype.number,
    isStudent:Proptype.bool,
}
// will give default values if values are not given
Student.defaultProps={
    name : "guest",
    age : 0,
    isStudent: false,
}
export default Student