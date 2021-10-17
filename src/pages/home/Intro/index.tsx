import React from 'react';
import DataCard from './DataCard';
import FeatureCard from './FeatureCard';
import IntroIcons from './Icons';

const Intro = () => {
  return (
    <div className="Intro">
      <DataCard />
      <IntroIcons />
      <FeatureCard />
    </div>
  );
};

export default Intro;