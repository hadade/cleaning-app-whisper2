'use client';

import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ServicesSummary from '@/components/ServicesSummary';
import Stats from '@/components/Stats';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <ServicesSummary />
      <Stats />
    </Layout>
  );
}