import './Hero.css';

export const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                <div className="hero-grid"></div>
            </div>

            <div className="hero-content">
                <div className="hero-badge">New: AI Agent Workflows</div>
                <h1 className="hero-title">
                    Automate anything.
                    <br />
                    <span>Visually.</span>
                </h1>
                <p className="hero-subtitle">
                    The fair-code workflow automation tool. Easily automate tasks across different services.
                    Visual, powerful, and extensible.
                </p>
                <div className="hero-cta-group">
                    <button className="btn btn-primary">Start Building Free</button>
                    <button className="btn btn-secondary">View Documentation</button>
                </div>
            </div>
        </section>
    );
};
