import logo from "../../assets/images/logo-footer.svg"

//component to display the footer
export const Footer = () => {
        return (
            <footer className="foot-container">
                {/* afficher le logo */}
                <img src={logo} aria-label="Kasa Logo" alt="logo de Kasa" />
                {/* afficher le copyright */}
                <p className="foot-container_text">© 2020 Kasa. All rights reserved</p>
            </footer>
        )
}