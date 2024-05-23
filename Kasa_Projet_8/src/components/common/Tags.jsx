import React from 'react';

//afficher les balises du fichier JSON
export const Tags = (props) => {

  //extraire la propriété "tag" des accessoires
  const {tag} = props;
    return (
    <div className='tagContainer'>
        <span className='tagButton'>{tag}</span>
    </div>
  )
}

