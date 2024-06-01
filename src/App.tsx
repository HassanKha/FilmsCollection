import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="h-screen">
        <Nav />

        <Routes>
          <Route path="/" element={<Cards />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
        <Header />
      </div>
    </Router>
  );
}

export default App;
