import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// BenefitBox Component
interface BenefitBoxProps {
  title: string;
  description: string;
  imageUrl: string;
}

const BenefitBox: React.FC<BenefitBoxProps> = ({ title, description, imageUrl }) => (
  <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center text-center w-full max-w-xs">
    <Image src={imageUrl} alt={title} width={100} height={100} className="mb-4" />
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm">{description}</p>
  </div>
);

// Benefits Section
const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="min-h-screen py-16 px-4 bg-gray-100 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-blue-600 text-center mb-12">Benefits</h2>
        <div className="flex flex-wrap justify-center gap-12">
          <BenefitBox
            title="Personalized Learning Paths"
            description="Tailored learning experiences for individual needs"
            imageUrl="/Ladder Climb.gif"
          />
          <BenefitBox
            title="AI-Powered Code Assistance"
            description="Intelligent support for coding challenges"
            imageUrl="/AI Bot.gif"
          />
          <BenefitBox
            title="Speed Through Difficult Concepts"
            description="Accelerated understanding of complex topics"
            imageUrl="/Speed Running.gif"
          />
        </div>
      </div>
    </section>
  );
};

// Meet the Team Section
const MeetTheTeam: React.FC = () => {
  return (
    <section id="meet-the-team" className="min-h-screen py-16 px-4 bg-white flex flex-col justify-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-blue-600 text-center mb-12">Meet the Team!</h2>
        <div className="flex flex-wrap items-center justify-center gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-xl text-gray-600">
              Codetionary is built by students who went through the same struggles as you.
            </p>
            <a href="#" className="text-xl text-blue-600 hover:underline inline-block">
              Learn More →
            </a>
          </div>
          <div className="flex-1">
            <Image
              src="/team_photo.jpg"
              alt="Team photo"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="min-h-screen py-16 px-4 bg-gray-100 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-blue-600 mb-12">How it Works</h2>
        <div className="bg-gray-300 aspect-video w-full flex items-center justify-center mb-12">
          <p className="text-gray-700">Demo inserted here</p>
        </div>
        <div className="flex justify-center items-center space-x-4">
          {[1, 2, 3].map((number) => (
            <div key={number} className="relative w-40 h-60 bg-gray-300 rounded">
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                {number}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Home Component
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="p-2 flex justify-between items-center fixed top-0 left-0 right-0 bg-white z-10 shadow-md">
        <a href="/" className="flex-1">
          <Image
            src="/codetionarylogo.jpg"
            alt="Codetionary"
            width={150}
            height={25}
            className="h-10 w-auto"
          />
        </a>
        <a href="https://tally.so/r/m6R4RB" target="_blank" rel="noopener noreferrer" className="mx-auto">
          <button className="text-white bg-blue-600 px-6 py-2 rounded-full border border-blue-600 hover:text-blue-600 hover:bg-white transition duration-300 font-semibold">
            Join Waitlist
          </button>
        </a>
      </header>

      {/* Landing Page Section */}
      <section className="min-h-screen flex items-center justify-center flex-col bg-gray-100 pt-16">
        <div className="text-center max-w-2xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">
            UNLOCK YOUR FULL-STACK POTENTIAL
          </h1>
          <p className="text-gray-600 mb-8">
            Master the art of full-stack engineering with Codetionary—the ultimate platform designed to elevate your coding skills from novice to pro.
          </p>
          <div className="flex justify-center mb-12">
            <a href="https://tally.so/r/m6R4RB" target="_blank" rel="noopener noreferrer">
              <button className="text-white bg-blue-600 px-6 py-2 rounded-full border border-blue-600 hover:text-blue-600 hover:bg-white transition duration-300 font-semibold">
                Join Waitlist
              </button>
            </a>
          </div>
          <a href="#benefits" className="text-blue-600 hover:underline">
            Learn more about the benefits
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <Benefits />

      {/* Meet the Team Section */}
      <MeetTheTeam />

      {/* How It Works Section */}
      <HowItWorks />

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 flex justify-center">
        <div className="flex flex-col items-center max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-4 text-white">
            Start Your Coding Journey Today—Join Codetionary and Transform Your Skills into Expertise!
          </h2>
          <div className="flex justify-center w-full max-w-md">
            <a href="https://tally.so/r/m6R4RB" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-blue-600 px-6 py-2 rounded-full border border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 font-semibold">
                Join Waitlist
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 px-4 flex flex-col items-center justify-center space-y-6 bg-gray-100">
        <div className="flex space-x-8">
          <a href="#" className="text-gray-400 hover:text-gray-600 text-3xl">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600 text-3xl">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="mailto:codetionaryteam@gmail.com" className="text-gray-400 hover:text-gray-600 text-3xl">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600 text-3xl">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </div>
        <p className="text-lg text-gray-500">© {new Date().getFullYear()} Codetionary. All rights reserved.</p>
      </footer>
    </div>
  );
}

