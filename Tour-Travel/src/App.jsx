import React from 'react'   // by typing "rfce"
import {BrowserRouter, Routes, Route} from 'react-router-dom';    // for routing in react app. It is a way to navigate between different pages instead of "React.import..." we can instead of "React./*"
import './App.css';  // importing the CSS file
import Home from './components/LandingPage/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Signup from './components/SignUp/Signup';
import Service from './components/ServicePage/Service';
import Navbar from './components/Navbar/Navbar';
import FooterPage from './components/Footer/FooterPage';

function App() {
  return (
    <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/service" element={<Service />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact/>} />
                {/* <Route path="/tour" element={<Tour />} />
                <Route path="/tour/:id" element={<TourDetail />} />
                <Route path="/tour/:id/edit" element={<TourEdit />} />
                <Route path="/tour/:id/delete" element={<TourDelete />} />
                <Route path="/tour/:id/review" element={<TourReview />} />
                <Route path="/tour/:id/review/:reviewId" element={<TourReviewDetail />} />
                <Route path="/tour/:id/review/:reviewId/edit" element={<TourReviewEdit />} />
                <Route path="/tour/:id/review/:reviewId/delete" element={<TourReviewDelete />} />
                <Route path="*" element={<NotFound />} /> */}
                <Route path="/signup" element={<Signup />} />
            </Routes>
            <FooterPage/>
        </BrowserRouter>
    </>
  )
}

export default App