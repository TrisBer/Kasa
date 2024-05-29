import React from 'react';
import { Link } from 'react-router-dom';

import { Banner } from "../components/banners/HomeBanner"
import { Card } from "../components/cards/HouseCard"
import data from "../data/logements.json"

export const Home = () => {

  return (
    <>
    {/* juste pour afficher la bannière  */}
    
    <Banner/>
    <div className='cards-container'>

      {/* cartographie des maisons et affichage de leurs cartes  */}
      {data.map((house,id) => (
        <div className='card_house' key={id}>

          {/* utilisez Link pour créer un lien sur la page des maisons */}
          <Link to={`/logement/${house.id}`} aria-label='House Page' className='link_card_house'>

            {/* Rendu du château de cartes avec son image de couverture et son titre */}
          <Card cover={house.cover} title={house.title} />
          </Link>
        </div>
      ))}
    </div>
    </>
  );
}