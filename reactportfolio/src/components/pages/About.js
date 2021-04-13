import React from "react";

function About() {
  return (
    <div class="tile is-ancestor">
      <div class="tile is-parent is-12">
        <div class="tile is-child box is-4">
          <figure class="image is-156x156">
            <img src="./images/amcm.jpg" alt="headshot" />
          </figure>
        </div>
        <article class="tile is-child box is-8">
          <div class="content">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <p class="about">
              My Name is Ann Cooper-Milne. I am a recent graduate of The Ohio
              State University College of Engineering Coding Boot Camp. I also
              hold a Bachelor of Science in Athletic Training and an Associate
              of Applied Science is Physical Therapy Assisting. Along with my 2
              degrees, I am certifed in Integrative Dry Needling and Instrument
              Assisted Soft Tissue Mobilization through Smart Tools Plus. I have
              over 16 years of combined experience in healthcare.
            </p>
            <br></br>
            <br></br>
            <p class="about">
              Why am I leaving healthcare you ask? Well, I don't intend on
              leaving healthcare, rather I want to continue as a Full Stack Web Developer
               in the healthcare industry, where I am certain my healthcare knowledge with 
               be a valuable asset in bridging the gap between healthcare and technology.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default About;
