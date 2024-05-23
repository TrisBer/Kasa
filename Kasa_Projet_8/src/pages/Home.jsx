import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Banner } from "../components/banners/HomeBanner"
import { Card } from "../components/cards/HouseCard"

export const Home = () => {

  // Etat pour les données des maisons et état de chargement.
  const [data, setData] = useState([]);

  //useEffect pour charger les maisons à l'assemblage du composant
  useEffect(() => { 
    //récupérer les données des maisons à partir du fichier JSON          Mise à jour de l'état avec les données
    axios.get("/logements.json").then((axiosResponse) => setData(axiosResponse.data));
  }, []);

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