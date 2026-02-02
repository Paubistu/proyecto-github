import './Navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <a href="/" className="brand">
                    <span className="brand-icon"></span>
                    Aisa Acc
                </a>

                <ul className="nav-links">
                    <li><a href="#features" className="nav-link">Features</a></li>
                    <li><a href="#integrations" className="nav-link">Integrations</a></li>
                    <li><a href="#pricing" className="nav-link">Pricing</a></li>
                    <li><a href="#docs" className="nav-link">Docs</a></li>
                </ul>

                <button className="nav-cta">Get Started</button>
            </div>
        </nav>
    );
};
