
import React from 'react';
import { TestimonialCard } from './components/TestimonialCard';
import { StatCard } from './components/StatCard';
import { Features } from './components/Features';
import { FeatureGrid } from './components/FeatureGrid';
import { WebClipperSection } from './components/WebClipperSection';
import { SecuritySection } from './components/SecuritySection';
import { WorkTogetherSection } from './components/WorkTogetherSection';
import { SecurityCards } from './components/SecurityCards';
import { PricingSection } from './components/PricingSection';
import { WorkflowFeatures } from './components/WorkflowFeatures';
import { FounderTestimonial } from './components/FounderTestimonial';
import { ComparisonTable } from './components/ComparisonTable';
import { ExploreTools } from './components/ExploreTools';
import { RagComparison } from './components/RagComparison';
import { IntegrationsHorizontal } from './components/IntegrationsHorizontal';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { QuickstartSection } from './components/QuickstartSection';
import { IndustrySolutions } from './components/IndustrySolutions';
import { HeroSection } from './components/HeroSection';
import { Header } from './components/Header';
import { RagProcess } from './components/RagProcess';
import { StatsArcSection } from './components/StatsArcSection';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#0D1117] text-white flex flex-col">
      
      {/* Smart Glassy Header */}
      <Header />

      {/* Hero Section - Full Width (Outside padded container) */}
      <HeroSection />

      {/* Main Content Wrapper with Padding */}
      <div className="w-full px-4 py-10 md:px-8 lg:px-12 flex-grow">
        <div className="mx-auto max-w-[1400px]">

          {/* Original Header Section */}
          <div className="mb-20 flex flex-col items-center text-center">
            <div className="relative">
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                Supported by many <br className="hidden md:block" />
                companies around the world
              </h2>
            </div>
          </div>

          {/* Existing Grid Layout */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 mb-32">
            
            {/* Left Column: Testimonial (Spans 7 columns on large screens) */}
            <div className="lg:col-span-7">
              <TestimonialCard />
            </div>

            {/* Right Column: Stats (Spans 5 columns on large screens) */}
            <div className="flex flex-col gap-6 lg:col-span-5">
              <StatCard
                value="15 +"
                badgeText="Years of experiences"
                description="Delivering functional, timeless spaces with innovation, precision, and great design."
              />
              <StatCard
                value="98 %"
                badgeText="Client satisfaction rate"
                description="We pride ourselves on delivering excellence, reflected in the high satisfaction of every client."
              />
            </div>
          </div>

          {/* Features Section */}
          <Features />

          {/* Integrations Horizontal Section */}
          <IntegrationsHorizontal />
          

          {/* Feature Grid Section */}
          <FeatureGrid />
          
          {/* Web Clipper Section */}
          <WebClipperSection />

          {/* Quickstart Section */}
          <QuickstartSection />

          {/* Workflow Features Section */}
          <WorkflowFeatures />

          {/* Founder Testimonial Section */}
          <FounderTestimonial />

          {/* Comparison Table Section */}
          <ComparisonTable />

          {/* Explore AI Tools Section */}
          <ExploreTools />
          
          {/* Rag Comparison Section */}
          <RagComparison />

          {/* RAG Process Section */}
          <RagProcess />

          {/* Industry Solutions Section */}
          <IndustrySolutions />

          {/* Security Section */}
          <SecuritySection />

          {/* Work Together Section */}
          <WorkTogetherSection />

          {/* Security Cards Section */}
          <SecurityCards />
          
          {/* Pricing Section */}
          <PricingSection />
          
          {/* Stats Arc Section */}
          <StatsArcSection />

          {/* FAQ Section */}
          <FAQSection />

        </div>
      </div>
      
      {/* Footer Section - Outside of padded container */}
      <Footer />
    </div>
  );
};

export default App;
