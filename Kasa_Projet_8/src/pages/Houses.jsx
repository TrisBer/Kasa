import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from "../data/logements.json"


import { Carousel } from '../components/carousel/carousel';
import { Collapse } from "../components/common/Collapse"
import {   Tags   } from "../components/common/Tags"
import {   Host   } from "../components/common/HostInfo"
import {   Rate   } from "../components/common/StarRating"


export const Houses = () => {

  //obtenir les paramètres de navigation et l'URL également
  const params = useParams();
  const navigate = useNavigate(); 

  //l'état pour approvisionner la maison choisie
  const [house, setHouse] = useState();
    
    useEffect(() => {
    //fonction asynchrone pour récupérer les données de la maison choisie
      const getData = async () => {

        try {
          //trouver la maison par la pièce d'identité
          const houseChosen = data.find(({ id }) => id === params.id);
          //aller à la page d'erreur si la maison n'existe pas
          if (houseChosen === undefined) {
            navigate("/404", { state: { message: "Impossible to fetch the datas" } });
          }else {
          //mettre à jour l'état avec les données de la maison
          setHouse(houseChosen);
          }
        } catch (error) {
          console.error(error);
        }
      };
      //appeler la fonction pour avoir les données quand le composant est prêt
      getData();      
      //assurez-vous que la fonction est appelée lorsque le composant est prêt
    }, [params.id, navigate]);
    
    //assurez-vous qu'axios obtienne les données de la maison
    if (!house) return null;

    //extraire les données de la maison si la maison est définie
    const { pictures: housePics, tags, equipments} = house;
    const allEquipments = equipments.map((item, index) => (
      <li key={index} className='equipList'>{item}</li>
    ));
    
    return (
      //état si les données sont disponibles
      house && (
        <div key ={params.id} className='house-container' >
          {/* afficher le carrousel avec les images de la maison */}
          <Carousel slides ={housePics} />
          <section className='hostInfo-container'>
            <div className='title-tags-container'>
              <div className='title-container redFont'>
                {/* titre et localisation de la maison */}
                <h1 className='location'>{house.title}</h1>
                <h3 className='location'>{house.location}</h3>
                  <div className="tag-container">  
                  {/* ses tags */}
                    {tags.map((tag) => (
                      <Tags key={tag} tag={tag} />
                    ))}              
                  </div>
              </div>
            <div className='rate-host-container'>
              <div className='host-container redFont'>
                {/* afficher les informations sur les hôtes  */}
                <Host
                  hostName = {house.host.name}
                  hostPic = {house.host.picture}
                />
              </div>
              <div>
                {/* afficher le tarif  */}
                <Rate score={house.rating}/>
              </div>
            </div>
            </div>
          </section>
          <div className='collapse-container'>
            {/* afficher le descriptif et les équipements en accordéon  */}
          <Collapse title="Description" content={house.description} />
          <Collapse title="Équipements" content={allEquipments} />        
          </div>
        </div>
      )
    )
}