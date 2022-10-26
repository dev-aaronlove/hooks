import React, { useState, useContext } from "react";
import { ProfileContext } from "../App";

const ProfileProvider = ({ children }) => { //children --> React reserved word
  
  const userInformation = {
    logo: 'https://live.staticflickr.com/5450/9917212873_04a14c8e35.jpg',
    profileImg: 'https://www.publicdomainpictures.net/pictures/80000/nahled/vintage-male-profile-silhouette.jpg',
    userName: 'Jimmy',
    team: 'Prodigy Skateboards',
    changeTeam: (property, value) => setUserInfo({ ...userInfo, [property]: value})
  }

  const [userInfo, setUserInfo] = useState(userInformation);

  return (
    <ProfileContext.Provider value={userInfo}>
      {children}
    </ProfileContext.Provider>
  )
}

const ChangeTeam = () => {
  const context = useContext(ProfileContext); //short code so don't need to create ProfileContext tags in return ()

  return (
    // React.Fragments or <> used to avoid div tag
    <> 
      <button onClick={() => context.changeTeam('team', 'Prodigy Skateboards')} className="profile-button">Prodigy Skateboards</button>
      <button onClick={() => context.changeTeam('team', 'Kickflip Studios')} className="profile-button">Kickflip Studios</button>
      <button onClick={() => context.changeTeam('team', 'Devslopes')} className="profile-button">Devlsopes</button>
    </>
  )
}

const Team = () => {
  const context = useContext(ProfileContext); //short code so don't need to create ProfileContext tags in return ()

  return (
    <div className="team">
      <small>TEAM:</small>
      <p className="profile-team">{context.team}</p>
    </div>
  )
}

const User = () => {
  const context = useContext(ProfileContext);

  return (
    <div className="user">
      <img src={context.profileImg} style={{ maxWidth: '200px'}} alt="profile user" />
      <h1 className="profile-username">context.userName</h1>
      <p className="profile-fullName">context.fullName</p>
      <Team />
      <ChangeTeam />
    </div>
  )
}

const Profile = () => {
  const context = useContext(ProfileContext);
  
  return (
    <div className="profile">
      <img src={context.logo} style={{ maxWidth: '75px'}} alt="company logo" />
      <User />
    </div>
  )
}

const Context = () => (
  <ProfileProvider>
    {/* 
    All components within ProfileProvider have access to data 
    in ProfileProvider because of children prop in ProfileProvider.
    Children Components Below: 
    */}
    <Profile />
  </ProfileProvider>
);

export default Context; //only one exported because only one using outside this file