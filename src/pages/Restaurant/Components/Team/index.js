import React from "react";
import TeamImage1 from "../../../../assets/images/team/1.jpg";
import TeamImage2 from "../../../../assets/images/team/2.jpg";
import TeamImage3 from "../../../../assets/images/team/3.jpg";
import TeamItem from "./components/TeamItem";
import "./style.css";

const Team = () => {
  const teamMembers = [
    { image: TeamImage1, name: "Raj Lakshmi", position: "Executive" },
    { image: TeamImage2, name: "Raj Kumar", position: "Head Chef" },
    { image: TeamImage3, name: "Raj shree", position: "Shoe Chef" },
  ];
  return (
    <section className="team-section sec-padding" id="team">
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 data-title="team" data-aos="fade-up">
              our chef
            </h2>
          </div>
        </div>
        <div className="row">
          {teamMembers &&
            teamMembers.map((teamMember, index) => {
              return (
                <TeamItem
                  key={index}
                  image={teamMember.image}
                  name={teamMember.name}
                  position={teamMember.position}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Team;
