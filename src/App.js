import React from 'react';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisteredUserPage from "./RegisteredUserPage";
import SignInPage from "./SignInPage";

function App() {
  return (
          <div>
              <RegisteredUserPage/>

          </div>

  );
}


export default App;
