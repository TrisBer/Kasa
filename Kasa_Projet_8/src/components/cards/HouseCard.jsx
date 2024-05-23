//composant de carte pour afficher une maison
export const Card = ({cover, title}) => {
    return (
		<article className="card-logement">
			<img src={cover} alt={title} aria-label={title} />
			<div className="card-logement__layer">
				<p className="card-logement__title">{title}</p>
			</div>
		</article>
	);
}

