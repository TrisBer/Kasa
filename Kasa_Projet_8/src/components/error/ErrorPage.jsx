import { Link } from 'react-router-dom'

//Composant d'erreur 404 qui est redirigé avec « erreur » vers l'URL
//sur le fichier Error.js grâce au hook useNavigate
export const ErrorPage = () => {
  return (

    <div className="errorContainer">
			<p className="errorNumber">404</p>
			<p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
			<Link to="/" aria-label = "Error Page" className="errorLinkHome">
				Retourner sur la page d’accueil
			</Link>
		</div>
  );
}
