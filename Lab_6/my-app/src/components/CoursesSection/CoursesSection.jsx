import React from 'react';
import './CoursesSection.css';

const CoursesSection = () => {
  const tabs = ["Artificial Intelligence (AI)", "Python", "Microsoft Excel", "Web Development", "Data Science", "AWS"];

  const courses = [
    {
      title: "The AI Engineer Course 2025: Complete AI Engineer Bootcamp",
      author: "365 Careers",
      rating: 4.6,
      reviews: "11,618",
      price: "E£349.99",
      tag: "Bestseller",
      tagColor: "yellow",
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Intro to AI Agents and Agentic AI",
      author: "365 Careers",
      rating: 4.4,
      reviews: "1,618",
      price: "E£349.99",
      tag: "Bestseller",
      tagColor: "yellow",
      img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "The Complete Guide To AI Powered Salesforce Development",
      author: "Matt Gerry",
      rating: 4.8,
      reviews: "63",
      price: "E£349.99",
      tag: "Bestseller",
      tagColor: "yellow",
      img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Artificial Intelligence for Business + ChatGPT Prize [2025]",
      author: "Hadelin de Ponteves",
      rating: 4.4,
      reviews: "4,855",
      price: "E£719.99",
      tag: "Premium",
      tagColor: "purple",
      img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section className="courses-section">
      <div className="tabs-container">
        {tabs.map((tab, i) => (
          <span key={i} className={`tab ${i === 0 ? 'active' : ''}`}>{tab}</span>
        ))}
      </div>

      <div className="courses-grid">
        {courses.map((course, i) => (
          <div key={i} className="course-card">
            <img src={course.img} alt="Course" className="course-img" />
            <div className="course-content">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-author">{course.author}</p>
              <div className="course-rating">
                <span className="rating-num">{course.rating}</span>
                <span className="stars">⭐⭐⭐⭐☆</span>
                <span className="reviews">({course.reviews})</span>
              </div>
              <div className="course-price">{course.price}</div>
              
              {course.tag && (
                <div className={`course-badge badge-${course.tagColor}`}>
                  {course.tag}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <button className="show-all-btn">Show all Artificial Intelligence (AI) courses →</button>
    </section>
  );
};

export default CoursesSection;