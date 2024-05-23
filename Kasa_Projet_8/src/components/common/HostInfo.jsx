import React from 'react'

//composant hôte pour afficher l'hôte et sa photo de profil dans la section de la page d'accueil
export const Host = (props) => {

	//extraire les propriétés
    const {hostName, hostPic, id} = props;

  return (
    <aside className="host-area">
		{/* afficher son nom  */}
		<div className="host-name">{hostName}</div>
			{/* afficher sa photo  */}
			<div className="hostPicture">
				<img src={hostPic} alt={id} aria-label={id}/>
			</div>
	</aside>
  )
}

