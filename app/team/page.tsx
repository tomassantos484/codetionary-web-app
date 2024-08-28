import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageUrl, bio }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
    <Image src={imageUrl} alt={name} width={200} height={200} className="rounded-full mb-4" />
    <h3 className="text-2xl font-bold text-blue-600 mb-2">{name}</h3>
    <p className="text-lg text-gray-600 mb-4">{role}</p>
    <p className="text-center text-gray-700 mb-4">{bio}</p>
    <div className="flex space-x-4">
      <a href="https://www.instagram.com" className="text-gray-400 hover:text-gray-600">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.tiktok.com" className="text-gray-400 hover:text-gray-600">
        <FontAwesomeIcon icon={faTiktok} />
      </a>
      <a href="mailto:codetionaryteam@gmail.com" className="text-gray-400 hover:text-gray-600">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  </div>
);

export default function Team() {
  const teamMembers = [
    {
      name: "Tomas",
      role: "Co-Founder & CEO",
      imageUrl: "/codetionarylogo.jpg",
      bio: "Passionate about revolutionizing coding education."
    },
    {
      name: "Lauren",
      role: "Co-Founder & CTO",
      imageUrl: "/codetionarylogo.jpg",
      bio: "Expert in AI and machine learning technologies."
    },
    {
      name: "Elena",
      role: "Lead Developer",
      imageUrl: "/codetionarylogo.jpg",
      bio: "Full-stack developer with a focus on user experience."
    },
    {
      name: "Sumayta",
      role: "Head of Product",
      imageUrl: "/codetionarylogo.jpg",
      bio: "Dedicated to creating intuitive learning experiences."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-2 flex justify-between items-center bg-white z-10 shadow-md">
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

      <main className="flex-grow bg-gray-100 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-blue-600 text-center mb-12">Meet Our Team</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </main>

      <footer className="py-8 px-4 flex flex-col items-center justify-center space-y-6 bg-gray-100">
        <div className="flex space-x-8">
          <a href="https://www.instagram.com" className="text-gray-400 hover:text-gray-600 text-3xl">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.tiktok.com" className="text-gray-400 hover:text-gray-600 text-3xl">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="mailto:codetionaryteam@gmail.com" className="text-gray-400 hover:text-gray-600 text-3xl">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://discord.gg/yyEqUcNp" className="text-gray-400 hover:text-gray-600 text-3xl">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </div>
        <p className="text-lg text-gray-500">© {new Date().getFullYear()} Codetionary. All rights reserved.</p>
      </footer>
    </div>
  );
}

