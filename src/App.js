import React from 'react';
import Header from "./Header";
import Body from "./Body";
function App() {
  return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
  );
}

function Footer() {
  return (
      <footer>
        <p>Footer &copy; 2024</p>
      </footer>
  );
}

export default App;
