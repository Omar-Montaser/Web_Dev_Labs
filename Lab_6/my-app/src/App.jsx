import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TrustedCompanies from './components/TrustedCompanies/TrustedCompanies';
// Import the new components
import SkillsSection from './components/SkillsSection/SkillsSection';
import CoursesSection from './components/CoursesSection/CoursesSection';
import FeatureBanner from './components/FeatureBanner/FeatureBanner';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* Add new sections below */}
      <SkillsSection />
      <CoursesSection />
      <FeatureBanner />
      <TrustedCompanies />
    </div>
  );
}

export default App;