import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import SplashScreen from './components/SplashScreen';


const App = lazy(() => import('./App'));
const Home = lazy(() => import('./components/pages/Home'));
const Params = lazy(() => import('./components/pages/Params'));
const MyJourneys = lazy(() => import('./components/pages/MyJourneys'));
const Profile = lazy(() => import('./components/pages/Profile'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Suspense fallback={<SplashScreen />}>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/my-journeys" element={<MyJourneys />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/params" element={<Params />} />
    </Routes>
    <Navbar />
   </Suspense>

  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
