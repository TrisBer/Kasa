import React from 'react'
import emptyStar from "../../assets/images/emptyStar.svg";
import fullStar from "../../assets/images/star-rate.svg";

//composant de notation avec des formes d'étoiles
export const Rate = ({ score }) => {
        
    //créer un tableau de taux
        const stars = [1, 2, 3, 4, 5];
        return (
             <div className="rate-area">
                {/* cartographie des étoiles en fonction du score  */}
                {stars.map((ratingLevel) => (
                    <img
                    key={ratingLevel.toString()}
                    className="star"
                    //utilisez les images d'étoiles vides ou remplies
                    src={ratingLevel <= score ? fullStar : emptyStar}
                    alt="rating star"
                    aria-label="rating star"
                    />
                ))}
            </div>            
    );
}

