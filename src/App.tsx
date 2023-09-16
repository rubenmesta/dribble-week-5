import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout } from './components/Layout';
import Hero from './components/Hero/Hero';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';

function App() {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <Pricing />
    </Layout>
  );
}

export default App;
