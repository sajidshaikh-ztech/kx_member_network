import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignInPage from "./SignInPage";
import RegisteredUserPage from "./RegisteredUserPage";
import Header from "./Header";
import Footer from "./Footer"; // Import your Footer component

function App() {
    return (
        <Router>
            <div>
                <Header />  {/* Render Header on all pages */}
                <Routes>
                    <Route path="/" element={<SignInPage />} />
                    <Route path="/kx_member_network" element={<SignInPage />} />
                    <Route path="/kx_member_network/registered-user" element={<RegisteredUserPage />} />
                </Routes>
                <Footer />  {/* Render Footer on all pages */}
            </div>
        </Router>
    );
}

export default App;
