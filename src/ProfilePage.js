import './Profile.css';
import { Link } from "react-router-dom";

function ProfilePage(){
    return(
    <div className="ProfilePage">

        <div className="Profile-background">
      
        </div>

        <div className="Profile-coverPhoto">
            <div className="Profile-Profilephoto">
      
            </div>
        </div>

        <div className="Profile-header">
            <div className="Profile-room-Button">
             <Link to = "/">
               <image>
               <img src ="buttonChat.png"/>
               </image>
             </Link>

             <Link to = "/friend-list">
               <image>
               <img src ="buttonFriend.png"/>  
               </image>
             </Link>

             <Link to = "/shop-page">
               <image>
               <img src ="buttonShop.png"/>  
               </image>
             </Link>

             <Link to = "/game-page">
               <image>
               <img src ="buttonGame.png"/> 
               </image>
             </Link>
            </div>

        </div>

        <div className="Profile-chatroom">
           Name Surname
        </div>

           

    </div>

    );
};

export default ProfilePage;