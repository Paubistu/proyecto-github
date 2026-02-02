import './Footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>AutoFlow</h3>
                    <p>
                        The open, extensible workflow automation tool.
                        <br />
                        Automate without limits.
                    </p>
                </div>

                <div className="footer-list">
                    <h4>Product</h4>
                    <ul>
                        <li><a href="#">Simplicity</a></li>
                        <li><a href="#">Workflow Editor</a></li>
                        <li><a href="#">Integrations</a></li>
                        <li><a href="#">Enterprise</a></li>
                    </ul>
                </div>

                <div className="footer-list">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">API Reference</a></li>
                        <li><a href="#">Community</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>

                <div className="footer-list">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} AutoFlow Inc. All rights reserved.
            </div>
        </footer>
    );
};
