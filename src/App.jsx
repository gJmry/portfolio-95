import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StartupScreen from './components/StartupScreen';
import MainScreen from './components/MainScreen';
import PortfolioScreen from './components/PortfolioScreen';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import tokyoDark from 'react95/dist/themes/tokyoDark';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import { styleReset } from 'react95';

const GlobalStyles = createGlobalStyle`
    ${styleReset}

    @font-face {
        font-family: 'ms_sans_serif';
        src: url('${ms_sans_serif}') format('woff2');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'ms_sans_serif';
        src: url('${ms_sans_serif_bold}') format('woff2');
        font-weight: bold;
        font-style: normal;
    }

    body {
        font-family: 'ms_sans_serif', sans-serif;
    }
`;

const App = () => {
    const [hasStarted, setHasStarted] = useState(false);

    return (
        <div>
            <GlobalStyles/>
            <ThemeProvider theme={tokyoDark}>
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
            </ThemeProvider>
        </div>
    );
};

export default App;
