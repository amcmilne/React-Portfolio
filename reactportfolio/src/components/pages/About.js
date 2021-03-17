import React from "react";

function About() {
  return (
    <div class="tile is-ancestor">
      <div class="tile is-parent is-12">
        <figure class="image is-156x156">
          <img src="./images/amcm.jpg" alt="headshot" />
        </figure>
        <article class="tile is-child box">
          <strong>
            <p class="tile-title">About Me:</p>
          </strong>

          <div class="content">
            <p>
              My Name is Ann Cooper-Milne. I have a Bachelor of Science in
              Athletic Training and an Associate of Applied Science is Physical
              Therapy Assisting. In combination, I have practiced over 16 years.
              I currently work in an outpatient physical therapy setting.
            </p>

            <p>
              Along with my 2 degrees, I am certifed in Integrative Dry Needling
              and Instrument Assisted Soft Tissue Mobilization through Smart
              Tools Plus. Why am I leaving healthcare you ask? Well, I don't
              intend on leaving healthcare, rather I want to expand my knowledge
              and begin working in other areas of the healthcare industry. I am
              certain with my healthcare knowledge I can help an up and coming
              healthcare business provide a better user experience.
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default About;
