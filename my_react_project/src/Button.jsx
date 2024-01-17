import { useState } from "react";


function Button(){

    const style = {
        backgroundColor: 'blue',
        color: '#fff', 
        padding: '10px 20px',
        border:'none',
        cursor: 'pointer'
    }
    let count = 0;
    // const [emoji,setEmoji]=useState("😊");


    // const handleClick = () => console.log("ouch!!!");
    // const handalClick2 = (name) => console.log(`${name} stop clicking me`);
    // const handalClick3 = (name) =>{

    //     if(count <3){
    //         count++;
    //         console.log(`${name} you clicked me ${count} time's`);
    //     }
    //     else{
    //         console.log(`${name} stop clicking me`)
    //        setEmoji("🤬");
    //     }
    // }
    // const handalClick4 = (e) => console.log(e);
    const handalClick4 = (e) => e.target.textContent = `ouch !!! 🤬`


    // return(<button onClick={(e)=> handalClick4(e)} style={style}>click me {emoji}</button>)
    // return(<button onClick={(e)=> handalClick4(e)} style={style}>click me 😊</button>)
    return(<button onDoubleClick={(e)=> handalClick4(e)} style={style}>click me 😊</button>)

}
export default Button