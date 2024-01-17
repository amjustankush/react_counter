// import Header from "./header"
// import Footer from "./footer"
// import Food from "./food"
// import Card from "./card"
// import Button from "./Button"
// import Student from "./student"
// import UserGreeting from "./UserGreeting"
// import List from "./list"
import ProfilePicture from "./profilePicture"

function App() {
  // const fruit =[{id:1, name:"apple", calories:95},
  //               {id:2, name:"orange", calories:45},
  //               {id:3, name:"banana", calories:105},
  //               {id:4, name:"coconut", calories:159},
  //               {id:5, name:"pineapple", calories:37},];


  // const veg =  [{id:6, name:"potato", calories:110},
  //               {id:7, name:"celery", calories:15},
  //               {id:8, name:"carrots", calories:25},
  //               {id:9, name:"corn", calories:63},
  //               {id:10, name:"broccoli", calories:50},];

  return(
    <>
      {/* <Header></Header>
      <Food></Food>
      <Card></Card>
      <UserGreeting isLoggedin = {true} username = "ankush"></UserGreeting>
      <UserGreeting isLoggedin = {false} username = "ankush"></UserGreeting>
      <UserGreeting></UserGreeting>
      <Student name = "ankush" age ={27} isStudent={true}></Student>
      <Student name = "ankush" age ={27} isStudent={true}></Student>
      <Student></Student> */}
      {/* <Button></Button>
      <List></List> */}
      {/* {fruit.length>0 ? <List items= {fruit} category="fruit"></List> : null} */}
      {/* {veg.length>0 ? <List items= {veg} category="veg"></List> : null} */}
      {/* with the help of && you dont need null it will turn into only if condition not if else*/}
      {/* {fruit.length> 0 && <List items= {fruit} category="fruit"></List>}
      {veg.length>0 && <List items= {veg} category="veg"></List>}
      <Footer></Footer> */}
      <ProfilePicture></ProfilePicture>
    </>
  );
}

export default App
