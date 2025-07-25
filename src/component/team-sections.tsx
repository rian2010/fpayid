import React from "react";
import Image from "next/image";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

import Ratu from "@/asset/IMG_6888.JPG";
import Audrey from "@/asset/IMG_6893.JPG";
import Adrian from "@/asset/IMG_6882.JPG";
import Niko from "@/asset/IMG_6885.JPG";
import Anita from "@/asset/IMG_6892.JPG";

const TeamSection = () => {
  // Sample team data - replace with your actual team members
  const teamMembers = [
    {
      id: 1,
      name: "Ratu Monica Nabila Sylva",
      role: "CEO & Founder",
      image: Ratu,
      bio: "With over 15 years of industry experience, Sarah leads our vision and strategy.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "mailto:sarah@example.com",
      },
    },
    {
      id: 2,
      name: "Audrey Miftiara",
      role: "CTO",
      image: Audrey,
      bio: "Michael brings deep technical expertise and leads our engineering initiatives.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "mailto:michael@example.com",
      },
    },
    {
      id: 3,
      name: "Adrian Dapot Oktavian Tambunan",
      role: "Design Director",
      image: Adrian,
      bio: "Aisha ensures our products are both beautiful and functional for our users.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: null,
        email: "mailto:aisha@example.com",
      },
    },
    {
      id: 4,
      name: "Niko Edward Hutagalung",
      role: "Marketing Lead",
      image: Niko,
      bio: "Carlos develops our brand strategies and leads our marketing campaigns.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: null,
        email: "mailto:carlos@example.com",
      },
    },
    {
      id: 5,
      name: "Anita Togi Marito Sibuea",
      role: "Product Manager",
      image: Anita,
      bio: "Emma oversees product development and ensures we deliver solutions that meet customer needs.",
      socials: {
        linkedin: "#",
        twitter: "#",
        github: null,
        email: "mailto:emma@example.com",
      },
    },
  ];

  return (
    <section id="team" className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Meet Our Team
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We're a passionate group of professionals committed to delivering
            excellence in everything we do.
          </p>
        </div>

        {/* Modified grid for 5 team members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform hover:transform hover:-translate-y-1"
            >
              {/* Fixed height container for consistent image sizing */}
              <div className="relative w-full h-64">
                <Image
                  src={member.image}
                  alt={`${member.name} photo`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                  style={{
                    objectFit: 'cover',
                    objectPosition: member.name === "Audrey Miftiara" ? 'center 10%' : 'center top'
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {member.bio}
                </p>
                <div className="flex space-x-3">
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  {member.socials.twitter && (
                    <a
                      href={member.socials.twitter}
                      className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      aria-label={`${member.name}'s Twitter profile`}
                    >
                      <Twitter size={18} />
                    </a>
                  )}
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      aria-label={`${member.name}'s GitHub profile`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                  {member.socials.email && (
                    <a
                      href={member.socials.email}
                      className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
