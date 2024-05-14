// import React from "react";
import "./ApartmentCard.scss";
import { Link } from "react-router-dom";
import "./ApartmentCard.scss";
//import PropTypes from 'prop-types';

function ApartmentCard(props) {
    return (
      <Link
      to={`/flat/${props.id}`} // Utilisation de l'ID dans l'URL
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
  //props.PropTypes = {
    //id: PropTypes.string,
    //imageUrl: PropTypes.string,
    //title: PropTypes.string,
  //}
  export default ApartmentCard;
  