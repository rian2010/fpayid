import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const TeamSection = () => {
  // Sample team data - replace with your actual team members
  const teamMembers = [
    {
      id: 1,
      name: "Ratu Monica Nabila Sylva",
      role: "CEO & Founder",
      image: "/api/placeholder/300/300",
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
      image: "/api/placeholder/300/300",
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
      image: "/api/placeholder/300/300",
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
      image: "/api/placeholder/300/300",
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
      image: "/api/placeholder/300/300",
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
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
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
              <img
                src={member.image}
                alt={`${member.name} photo`}
                className="w-full h-64 object-cover object-center"
              />
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
