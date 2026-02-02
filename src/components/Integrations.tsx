import './Integrations.css';

const integrations = [
    "Google Sheets", "Slack", "Notion", "OpenAI", "Stripe",
    "Telegram", "Discord", "HubSpot", "Airtable", "Gmail",
    "Shopify", "Typeform", "GitHub", "Trello", "Whatsapp"
];

export const Integrations = () => {
    return (
        <section className="integrations" id="integrations">
            <div className="integrations-header">
                <h2>Works with your favorite tools</h2>
                <p>Connect to 200+ pre-built integrations instantly.</p>
            </div>

            <div className="marquee-container">
                {/* Double the list for seamless loop */}
                <div className="marquee-content">
                    {integrations.concat(integrations).map((item, index) => (
                        <div key={index} className="integration-item">
                            <span className="integration-icon">●</span> {item}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
