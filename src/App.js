import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import all from react-router-dom

import SignInPage from "./SignInPage";
import RegisteredUserPage from "./pages/RegisteredUserPage";
import Header from "./Header";
import Footer from "./Footer";
import CategoryLandingPage from "./pages/CategoryLandingPage";
import ProductsListingPage from "./pages/ProductsListingPage";
import GuestUserPage from "./pages/GuestUserPage"; // Import your Footer component

// Option 2: BrowserRouter with basename (uncomment this block)
function App() {
    return (
            <div>
                <Header />
                <BrowserRouter>
                    <Routes>
                        <Route path="/kx_member_network" element={<CategoryLandingPage />} />
                        <Route path="/kx_member_network/registered-user" element={<RegisteredUserPage />} />
                        <Route path="/kx_member_network/guest-user" element={<GuestUserPage />} />
                        <Route path="/kx_member_network/products-listing" element={<ProductsListingPage />} />
                        <Route path="/kx_member_network/sign-in" element={<SignInPage />} />
                        <Route path="/kx_member_network/category-landing" element={<CategoryLandingPage />} />
                    </Routes>
                </BrowserRouter>
                <Footer />
            </div>

    );
}

export default App;
