import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartupScreen from './components/StartupScreen';
import MainScreen from './components/MainScreen';
import PortfolioScreen from './components/PortfolioScreen'; // Nouveau composant PortfolioScreen
import './assets/styles/global.css';

const App = () => {
    const [hasStarted, setHasStarted] = useState(false);

    return (
        <Router>
            <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
                <Routes>
                    <Route
                        path="/"
                        element={<StartupScreen onStartupComplete={() => setHasStarted(true)} />}
                    />
                    <Route path="/main" element={<MainScreen />} />
                    <Route path="/portfolio" element={<PortfolioScreen />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
