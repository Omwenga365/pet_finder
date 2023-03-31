import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HelloSection from '../HelloSection';
import Review from '../Review';

function Home() {
    return (
    <>
        <HelloSection />
        <Cards />
        <Review />
    </>
    );
}

export default Home;