import React from 'react';
import Hero from '../components/home/Hero';
import CategoryOrbit from '../components/home/CategoryOrbit';
import CategoryCards from '../components/home/CategoryCards';
import Bestsellers from '../components/home/Bestsellers';
import FlashSale from '../components/home/FlashSale';
import QuizSection from '../components/home/QuizSection';
import GreenYourSpace from '../components/home/GreenYourSpace';
import PlantCombos from '../components/home/PlantCombos';
import NewArrivals from '../components/home/NewArrivals';
import WhyUs from '../components/home/WhyUs';
import CareJournal from '../components/home/CareJournal';
import Testimonials from '../components/home/Testimonials';
import InstaGallery from '../components/home/InstaGallery';
import Newsletter from '../components/home/Newsletter';

const HomePage = () => {
  return (
    <div className="space-y-0">
      <Hero />
      <CategoryOrbit />
      <CategoryCards />
      <Bestsellers />
      <FlashSale />
      <QuizSection />
      <GreenYourSpace />
      <PlantCombos />
      <NewArrivals />
      <WhyUs />
      <CareJournal />
      <Testimonials />
      <InstaGallery />
      <Newsletter />
    </div>
  );
};

export default HomePage;
