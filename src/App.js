import React from 'react';
import { BrowserRouter as History, Routes, Route } from 'react-router-dom'; // Import all from react-router-dom

import SignInPage from "./SignInPage";
import RegisteredUserPage from "./RegisteredUserPage";
import Header from "./Header";
import Footer from "./Footer";
import CategoryLandingPage from "./CategoryLandingPage";
import ProductsListingPage from "./ProductsListingPage";
import GuestUserPage from "./GuestUserPage"; // Import your Footer component

// Option 2: BrowserRouter with basename (uncomment this block)
function App() {
    return (
        <History basename="/kx_member_network"> {/* Set basename to your deployed directory */}
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<CategoryLandingPage />} />
                    <Route path="/kx_member_network" element={<CategoryLandingPage />} />
                    <Route path="/registered-user" element={<RegisteredUserPage />} />
                    <Route path="/guest-user" element={<GuestUserPage />} />
                    <Route path="/category-landing" element={<CategoryLandingPage />} />
                    <Route path="/products-listing" element={<ProductsListingPage />} />
                </Routes>
                <Footer />
            </div>
        </History>
    );
}

export default App;
