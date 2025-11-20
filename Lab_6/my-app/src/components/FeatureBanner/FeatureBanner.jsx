import React from 'react';
import './FeatureBanner.css';

const FeatureBanner = () => {
  return (
    <section className="feature-wrapper">
      <div className="feature-banner">
        <div className="feature-content">
          <h2>Reimagine your career in the AI era</h2>
          <p>Future-proof your skills with Personal Plan. Get access to a variety of fresh content from real-world experts.</p>
          
          <div className="feature-features">
            <div className="feature-item">✨ Learn AI and more</div>
            <div className="feature-item">🏆 Prep for a certification</div>
            <div className="feature-item">💬 Practice with AI coaching</div>
            <div className="feature-item">💡 Advance your career</div>
          </div>

          <button className="feature-btn">Learn more</button>
          <p className="feature-sub">Starting at E£204.00/month</p>
        </div>

        <div className="feature-image-section">
             {/* Using a single representative image for the collage to keep code clean */}
             <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
                alt="Career Growth" 
             />
        </div>
      </div>
    </section>
  );
};

export default FeatureBanner;