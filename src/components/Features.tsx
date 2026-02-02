import type { MouseEvent } from 'react';
import './Features.css';

const features = [
    {
        title: "Visual Workflow Editor",
        description: "Build complex automations with our intuitive drag-and-drop editor. No coding required.",
        icon: "⚡"
    },
    {
        title: "200+ Integrations",
        description: "Connect to all your favorite apps and services. From Google Sheets to Salesforce.",
        icon: "🔌"
    },
    {
        title: "Self-Hostable",
        description: "Run AutoFlow on your own servers. Keep your data private and secure.",
        icon: "🏢"
    },
    {
        title: "Developer Friendly",
        description: "Extend functionality with JavaScript/TypeScript. Build custom nodes easily.",
        icon: "💻"
    }
];

export const Features = () => {
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    return (
        <section className="features" id="features">
            <div className="features-container">
                <div className="features-header">
                    <h2 className="features-title">Why AutoFlow?</h2>
                    <p className="features-subtitle">
                        Everything you need to automate your workflows, in one powerful platform.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card"
                            onMouseMove={handleMouseMove}
                        >
                            <div className="feature-icon-wrapper">
                                {feature.icon}
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
