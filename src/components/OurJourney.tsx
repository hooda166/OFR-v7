import React from 'react';
import { Timeline } from './ui/timeline';
import { Building, Award, Globe, Zap, Users, Target, Factory, Network } from 'lucide-react';

const OurJourney = () => {
  const journeyData = [
    {
      title: "2025",
      content: (
        <div>
          <p className="text-gray-600 text-xs md:text-sm font-normal mb-8">
            Marking a transformative year with strategic acquisitions and breakthrough innovations, OFR Telecom expanded its technological capabilities and market presence through advanced UV FRP production and strategic partnerships.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=500&q=80"
              alt="UV FRP production technology"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80"
              alt="Strategic acquisition and expansion"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Target className="h-5 w-5 text-blue-600 mr-2" />
              Strategic Expansion & Innovation
            </h4>
            <div className="space-y-2">
              <div className="flex gap-2 items-center text-gray-600 text-xs md:text-sm">
                • Successfully acquired Nagpur Composite, strengthening market position
              </div>
              <div className="flex gap-2 items-center text-gray-600 text-xs md:text-sm">
                • Launched revolutionary UV FRP production technology
              </div>
              <div className="flex gap-2 items-center text-gray-600 text-xs md:text-sm">
                • Enhanced product portfolio with UV FRP solutions
              </div>
              <div className="flex gap-2 items-center text-gray-600 text-xs md:text-sm">
                • Strengthened composite manufacturing capabilities
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-gray-600 text-xs md:text-sm font-normal mb-8">
            A landmark year marked by unprecedented infrastructure expansion with the commissioning of our state-of-the-art integrated manufacturing facility, revolutionizing our production capabilities and operational efficiency.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=500&q=80"
              alt="Integrated manufacturing facility"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=500&q=80"
              alt="Advanced production systems"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Factory className="h-5 w-5 text-blue-600 mr-2" />
              Infrastructure Revolution
            </h4>
            <div className="space-y-2">
              <div className="flex gap-2 items-center text-gray-600 text-xs md:text-sm">
                • Shifted to new integrated plant with 1,000,000 sq feet production area
              </div>
              <div className="flex gap-2 items-center text-gray-600 text-xs md:text-sm">
                • Implemented cutting-edge automation
              </div>
              <div className="flex gap-2 items-center text-gray-600 text-xs md:text-sm">
                • Enhanced production efficiency and quality control systems
              </div>
              <div className="flex gap-2 items-center text-gray-600 text-xs md:text-sm">
                • Established world-class manufacturing infrastructure
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-gray-600 text-xs md:text-sm font-normal mb-8">
            A pivotal milestone in our technological evolution with the successful launch of optical fiber cable production, marking our entry into complete end-to-end fiber optic solutions and establishing OFR Telecom as a comprehensive telecommunications infrastructure provider.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=500&q=80"
              alt="Optical fiber cable production"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=500&q=80"
              alt="Fiber optic technology advancement"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Network className="h-5 w-5 text-blue-600 mr-2" />
              Optical Fiber Cable Revolution
            </h4>
            <div className="space-y-2">
              <div className="flex gap-2 items-center text-gray-600 text-xs md:text-sm">
                • Successfully launched optical fiber cable production line
              </div>
              <div className="flex gap-2 items-center text-gray-600 text-xs md:text-sm">
                • Expanded product portfolio to include complete fiber optic solutions
              </div>
              <div className="flex gap-2 items-center text-gray-600 text-xs md:text-sm">
                • Established end-to-end telecommunications infrastructure capabilities
              </div>
              <div className="flex gap-2 items-center text-gray-600 text-xs md:text-sm">
                • Achieved vertical integration in fiber optic manufacturing
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="text-gray-600 text-xs md:text-sm font-normal mb-8">
            Strategic expansion phase with the establishment of our second manufacturing facility, significantly enhancing production capacity and operational resilience while maintaining excellence in quality and delivery standards.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=500&q=80"
              alt="Second manufacturing facility"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=500&q=80"
              alt="Enhanced production capabilities"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Factory className="h-5 w-5 text-blue-600 mr-2" />
              Strategic Capacity Expansion
            </h4>
            <div className="space-y-2">
              <div className="flex gap-2 items-center text-gray-600 text-xs md:text-sm">
                • Established second state-of-the-art manufacturing facility
              </div>
              <div className="flex gap-2 items-center text-gray-600 text-xs md:text-sm">
                • Doubled production capacity and operational flexibility
              </div>
              <div className="flex gap-2 items-center text-gray-600 text-xs md:text-sm">
                • Enhanced supply chain resilience and customer service
              </div>
              <div className="flex gap-2 items-center text-gray-600 text-xs md:text-sm">
                • Implemented advanced quality control and automation systems
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2016",
      content: (
        <div>
          <p className="text-gray-600 text-xs md:text-sm font-normal mb-8">
            The operational genesis of OFR Telecom with the successful commencement of FRP production, marking the beginning of our journey as a specialized manufacturer of high-quality fiber reinforced plastic solutions for the telecommunications industry.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=500&q=80"
              alt="FRP production commencement"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=500&q=80"
              alt="Manufacturing excellence"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Zap className="h-5 w-5 text-blue-600 mr-2" />
              Production Launch & Excellence
            </h4>
            <div className="space-y-2">
              <div className="flex gap-2 items-center text-gray-600 text-xs md:text-sm">
                • Successfully launched FRP production in July 2016
              </div>
              <div className="flex gap-2 items-center text-gray-600 text-xs md:text-sm">
                • Established high-quality manufacturing standards and processes
              </div>
              <div className="flex gap-2 items-center text-gray-600 text-xs md:text-sm">
                • Built foundation for telecommunications infrastructure solutions
              </div>
              <div className="flex gap-2 items-center text-gray-600 text-xs md:text-sm">
                • Commenced journey as specialized FRP manufacturer
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2015",
      content: (
        <div>
          <p className="text-gray-600 text-xs md:text-sm font-normal mb-8">
            The foundational moment of OFR Telecom with official company incorporation in October 2015, establishing the corporate framework and vision that would drive our mission to revolutionize fiber optic infrastructure through innovative solutions and manufacturing excellence.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80"
              alt="Company incorporation"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80"
              alt="Corporate foundation and vision"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
          <div className="mb-8">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Building className="h-5 w-5 text-blue-600 mr-2" />
              Corporate Foundation & Vision
            </h4>
            <div className="space-y-2">
              <div className="flex gap-2 items-center text-gray-600 text-xs md:text-sm">
                • Official company incorporation completed in October 2015
              </div>
              <div className="flex gap-2 items-center text-gray-600 text-xs md:text-sm">
                • Established corporate structure and governance framework
              </div>
              <div className="flex gap-2 items-center text-gray-600 text-xs md:text-sm">
                • Defined vision for fiber optic infrastructure innovation
              </div>
              <div className="flex gap-2 items-center text-gray-600 text-xs md:text-sm">
                • Laid foundation for future manufacturing excellence
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Journey
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              From a vision in 2009 to global leadership in fiber optic solutions - discover the milestones that shaped OFR Telecom
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <Timeline data={journeyData} />

      {/* Vision Forward Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Network className="h-16 w-16 text-blue-300" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">Looking Forward</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            As we continue our journey, we remain committed to innovation, quality, and connecting the world through advanced fiber optic technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/30 hover:bg-white/25 transition-all duration-300">
              <Target className="h-8 w-8 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">2025 Goals</h3>
              <p className="text-blue-200 text-sm">Expand to 30+ countries with enhanced product portfolio</p>
            </div>
            <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/30 hover:bg-white/25 transition-all duration-300">
              <Zap className="h-8 w-8 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
              <p className="text-blue-200 text-sm">Next-generation smart fiber solutions and IoT integration</p>
            </div>
            <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/30 hover:bg-white/25 transition-all duration-300">
              <Users className="h-8 w-8 text-blue-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Sustainability</h3>
              <p className="text-blue-200 text-sm">Carbon-neutral operations and eco-friendly manufacturing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurJourney;