import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Pages from './components/Pages';
import  Profile from  './pages/Profile';
import PlanGenerator from './pages/Plangenerator';
import './App.css';
import Plans from './components/plans/Plans'
import Plan from './components/plans/Plan'
import DisclaimerPage from './pages/Disclaimerpage';
import { useAuth0 } from '@auth0/auth0-react';
import HealthAnalysisPage from './components/reports/HealthAnalysisPage';


function App() {
  const { isAuthenticated} = useAuth0();
  return (
    <Router>
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />   
          <Route path="/plangenerator" element={<PlanGenerator isAuthenticated={isAuthenticated} />} /> 
          <Route path='/plans' element={<Plans />} />
          <Route path='/plan/:id?' element={<Plan /> } />
          <Route path="/disclaimerpage" element={<DisclaimerPage/>} />
          <Route path ="/analyze-lab-report" element={<HealthAnalysisPage />} />

           {/*   
          Add more routes for other pages */}
        </Routes>
      </main>
    
    </Router>
  );
}

function HomePage() {
  return (
    <div>
        <Header />
        <Pages />
        <Footer />         
    </div>
  
  );
}

export default App;