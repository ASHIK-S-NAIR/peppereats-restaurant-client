import React from 'react'

const TeamItem = ({image, name, position}) => {
  return (
    <div
            className="team-item"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img src={image} alt="team item" />
            <div className="team-item-info">
              <h3>{name}</h3>
              <p>{position}</p>
            </div>
          </div>
  )
}

export default TeamItem