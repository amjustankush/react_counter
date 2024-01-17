
function ProfilePicture(){

    const imgurl = './src/assets/ankush_white_profile.png';

    const handalClick = (e) => e.target.style.display = "none";

    return(<img onClick={(e)=> handalClick(e)} src = {imgurl}></img>);
}
export default ProfilePicture