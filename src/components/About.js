import React from "react";
import user from "../data/user";

function Links(props){
return (
  <div id="links">
  <a> {props.linkedin} </a>
  <a> {props.github} </a>
  </div>
)
}
function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links {props.links} />

      
    </div>
  );

}


export default About;
