import React from 'react';
import './App.css';

function App() {

  const profile ={
    photo :"/Pdp.png",
    Name:{firstName:"Aloui", lastName:"Khalil"},
    ProfileLink:"https://www.facebook.com/",
  }

let a= <div></div>
if (profile.ProfileLink != "") {
  a = <button onClick={()=> {window.location= profile.ProfileLink}}>
 My Facebook
</button>
  
}

  return (
    <div style={{textAlign:"center",marginTop:"30px"}}>
      <img src="/Pdp.png"></img>
     <p>{profile.Name.firstName}   {profile.Name.lastName}</p>
  
  {a}
  </div>

  );
}

export default App;
