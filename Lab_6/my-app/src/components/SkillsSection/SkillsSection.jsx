import React from 'react';
import './SkillsSection.css';

const SkillsSection = () => {
  const skills = [
    {
      title: "Generative AI",
      followers: "1.7M+",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "IT Certifications",
      followers: "14M+",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Data Science",
      followers: "8.1M+",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Communication",
      followers: "5M+",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="skills-section">
      <div className="skills-header">
        <h2>Learn essential career and life skills</h2>
        <p>Udemy helps you build in-demand skills fast and advance your career in a changing job market.</p>
      </div>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-img-container">
               <img src={skill.image} alt={skill.title} />
            </div>
            <div className="skill-info">
              <span className="skill-badge">👥 {skill.followers}</span>
              <h3>{skill.title}</h3>
              <div className="arrow-icon">→</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;