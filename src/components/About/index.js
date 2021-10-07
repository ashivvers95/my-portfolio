import React from 'react';
import myPhoto from "../../assets/myPhoto.jpg"

function About() {
    return (
        <section>
            <h1 id="about"> Learn more about this developer! </h1>
            <img className = "profile-photo" src={myPhoto}  alt = "photo of the developer"/>
        </section>
    );
}

export default About;