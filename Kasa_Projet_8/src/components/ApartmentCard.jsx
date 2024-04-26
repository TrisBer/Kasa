import React from "react";
import "./ApartmentCard.scss";
import { Link } from "react-router-dom";
import "./ApartmentCard.scss";

function ApartmentCard(props) {
    return (
      <Link
        to="/flat"
        state={{
          apartmentId: props.id
        }}
      >
        <article className="apartment">
          <img src={props.imageUrl} alt="" />
          <div className="apartment__subtitle">{props.title}</div>
        </article>
      </Link>
    );
  }
  
  export default ApartmentCard;
  