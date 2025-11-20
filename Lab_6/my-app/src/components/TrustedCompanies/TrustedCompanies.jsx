import React from 'react';
import './TrustedCompanies.css';

const TrustedCompanies = () => {
  const companies = [
    "Volkswagen", "Samsung", "Cisco", "Vimeo", "P&G", "HPE", "Citi", "Ericsson"
  ];

  return (
    <section className="trusted-section">
      <p className="trusted-text">
        Trusted by over 17,000 companies and millions of learners around the world
      </p>
      <div className="logos-container">
        {companies.map((company, index) => (
          <div key={index} className="company-logo-placeholder">
            {company}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedCompanies;