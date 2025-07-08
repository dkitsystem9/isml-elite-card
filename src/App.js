import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage_TEMP';
import PrivacyPolicy from './components/LandingPage/PrivacyPolicy';
import TermsAndConditions from './components/LandingPage/TermsAndConditions';

function App() {
  return (
    <Router basename="/isml-elite-card">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  );
}

export default App;
