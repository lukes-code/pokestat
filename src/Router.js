import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './App';
import Stats from './Stats';

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="" element={<App />} />
            <Route path="/pokemon/:pokemonId" element={<Stats />} />
        </Routes>
    </BrowserRouter>
);

export default Router;