import React from "react";

function Card({ photo, city, title, rating, type, beds, superhost }) {
  return (
    <div>
      <div className="img">
        <img src={photo} alt={city} />
      </div>
      <div className="dat">
        <div className="top-info">
          {superhost === true ? <button className="super"><h3>Super Host</h3></button> : ""}
          <p>{type}</p>

          <p>{beds} beds</p>

          <div className="star">
            <span class="material-symbols-outlined star-icon">
              star_half
            </span>
           
          </div>
          <span>{rating}</span>

        </div>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Card;
